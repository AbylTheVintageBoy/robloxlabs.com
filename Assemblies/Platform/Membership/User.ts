import { DFLog, DYNAMIC_LOGGROUP, FASTLOGS } from '../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog';
import { Task } from '../../Http/Task';
import { PartialDataBase } from '../../PartialDatabase/PartialDataBase';
import { PartialDatabaseConditionType } from '../../PartialDatabase/PartialDatabaseConditionType';
import { IEmail } from '../Credentials/IEmail';
import { ISession } from './ISession';
import { IUser } from './IUser';
import { UserModelBuildersClubMembershipTypeEnum } from './UserModelBuildersClubMembershipTypeEnum';
import { SanitizeData } from '../../Util/SanitizeData'

import { createHmac } from "crypto"

DYNAMIC_LOGGROUP('Tasks');

export class User implements IUser {
	public Id: Number;

	public Name: String;
	public DisplayName: String;
	public MembershipType: UserModelBuildersClubMembershipTypeEnum;
	public SecurityToken: String;
	public Description: String;
	public Password: String;
	public Created: String;
	public IsBanned: Boolean;
	public Email: IEmail;
	public HasPasswordSet: Boolean;
	public AgeBracket: Number;
	public Roles: String[];
	public RobuxBalance: Number;
	public NotificationCount: Number;
	public EmailNotificationsEnabled: Boolean;
	public CountryCode: String;
	public UserAbove13: Boolean;
	public ThumbnailUrl: String;
	public IsAnyBuildersClubMember: Boolean;
	public IsPremium: Boolean;
	public ChangeUsernameEnabled: Boolean;
	public IsAdmin: Boolean;
	public Updated: String;

	public static async GetByCookie(Cookie: string): Task<IUser> {
		const db = new PartialDataBase('RobloxMembership', 'root', 'Io9/9DEF');
		const [didConnect, err] = await db.Connect();
		if (!didConnect) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching user: %s', err);
			return null;
		}
		const [, , sessions] = db.GetTable<ISession>('session', 'Id', true);
		const [success, message, result] = await sessions.SelectKeyWhere('UserId', {
			Key: 'SessionToken',
			Condition: PartialDatabaseConditionType.Equal,
			Value: Cookie,
		});
		if (!success) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching user: %s', message);
			return null;
		}
		const thisSession = result.Rows[0];
		if (!thisSession) return null;
		return await this.GetById(<number>thisSession.Data[0].Value);
	}

	/**
	 * Partial implementation, full implementation when DataBase is fully setup.
	 * @param {number} Id The userId.
	 * @returns {IUser} Returns an IUser.
	 */
	public static async GetById(Id: number): Task<IUser> {
		// TODO: Do some extra checking here!
		const db = new PartialDataBase('RobloxMembership', 'root', 'Io9/9DEF');
		const [didConnect, err] = await db.Connect();
		if (!didConnect) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching user: %s', err);
			return null;
		}
		const [, , users] = db.GetTable<IUser>('User', 'Id', true);
		const [success, message, result] = await users.SelectKeysWhere(
			[
				'Name',
				'DisplayName',
				'MembershipType',
				'Description',
				'Created',
				'IsBanned',
				'AgeBracket',
				'Roles',
				'CountryCode',
				'UserAbove13',
				'IsAdmin',

			],
			{
				Key: 'Id',
				Condition: PartialDatabaseConditionType.Equal,
				Value: Id,
			},
		);
		if (!success) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching user: %s', message);
			return null;
		}
		const thisUser = result.Rows[0];
		if (!thisUser) return null;

		const user = new User();
		user.Id = Id;
		user.Name = <String>thisUser.Data[0].Value;
		user.DisplayName = <String>thisUser.Data[1].Value;
		user.MembershipType = <UserModelBuildersClubMembershipTypeEnum>thisUser.Data[2].Value;
		user.Description = <String>thisUser.Data[3].Value;
		user.Created = <String>thisUser.Data[4].Value;
		user.IsBanned = <Boolean>(thisUser.Data[5].Value === 1);
		user.AgeBracket = <Number>thisUser.Data[6].Value;
		user.Roles = <String[]>JSON.parse(<string>thisUser.Data[7].Value);
		user.CountryCode = <String>thisUser.Data[8].Value;
		user.UserAbove13 = <Boolean>(thisUser.Data[9].Value === 1);
		user.IsAdmin = <Boolean>(thisUser.Data[10].Value === 1);
		await db.Disconnect();
		return user;
	}
	public static async GetByPassword(Username: string, Password: string): Task<IUser> {
		// TODO: Do some extra checking here!
		const db = new PartialDataBase('RobloxMembership', 'root', 'Io9/9DEF');
		const [didConnect, err] = await db.Connect();
		if (!didConnect) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching user: %s', err);
			return null;
		}
		const [, , users] = db.GetTable<IUser>('User', 'Id', true);
		const [success, message, result] = await users.SelectKeysWhere(
			[
				'Name',
				'DisplayName',
				'MembershipType',
				'Description',
				'Created',
				'IsBanned',
				'AgeBracket',
				'Roles',
				'CountryCode',
				'UserAbove13',
				'IsAdmin',
				'Password',
				'Id'
			],
			{
				Key: 'Name',
				Condition: PartialDatabaseConditionType.Equal,
				Value: Username,
			},
		);
		if (!success) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching user: %s', message);
			return null;
		}
		const thisUser = result.Rows[0];
		if (!thisUser) return null;
		FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] PWD: %s', <string>thisUser.Data[11].Value);

		const hasher = createHmac("sha256", "Io9/9DEF")
		const passHash = hasher.update(Password).digest("hex")
		if (<string>thisUser.Data[11].Value != passHash) {
			return null;
		}
		const user = new User();
		user.Id = <Number>(thisUser.Data[12].Value);
		user.Name = <String>thisUser.Data[0].Value;
		user.DisplayName = <String>thisUser.Data[1].Value;
		user.MembershipType = <UserModelBuildersClubMembershipTypeEnum>thisUser.Data[2].Value;
		user.Description = <String>thisUser.Data[3].Value;
		user.Created = <String>thisUser.Data[4].Value;
		user.IsBanned = <Boolean>(thisUser.Data[5].Value === 1);
		user.AgeBracket = <Number>thisUser.Data[6].Value;
		user.Roles = <String[]>JSON.parse(<string>thisUser.Data[7].Value);
		user.CountryCode = <String>thisUser.Data[8].Value;
		user.UserAbove13 = <Boolean>(thisUser.Data[9].Value === 1);
		user.IsAdmin = <Boolean>(thisUser.Data[10].Value === 1);
		await db.Disconnect();
		return user;
	}

	public static async createNewUser(name_: string, pass: string): Task<IUser> { // ADD MORE PARAMS LATER!
		const db = new PartialDataBase('RobloxMembership', 'root', 'Io9/9DEF');
		const [didConnect, err] = await db.Connect();
		if (!didConnect) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when connecting to userDB: %s', err);
			return null;
		}
		let name = SanitizeData(name_)
		const hasher = createHmac("sha256", "Io9/9DEF")
		const passHash = hasher.update(pass).digest("hex")
		const [, , users] = db.GetTable<IUser>('User', 'Id', true);
		const [,, result] = await users.SelectKeyWhere('Id', {
			Key: 'Name',
			Condition: PartialDatabaseConditionType.Equal,
			Value: name,
		});
		const thisUser = result.Rows[0];
		if (thisUser != null) return null; // oops we found someone else with that name!
		
		//const user = new User();
		const [s, m] = await users.InsertValues([
			{ Key: "Name", Value: name },
			{ Key: "DisplayName", Value: name },
			{ Key: "MembershipType", Value: UserModelBuildersClubMembershipTypeEnum.None },
			{ Key: "Description", Value: "I am a brand new user! Say hi!" },
			{ Key: "Created", Value: "2020-01-01 01:01:01" },
			{ Key: "IsBanned", Value: 0	 },
			{ Key: "AgeBracket", Value: 0 },
			{ Key: "Roles", Value: JSON.stringify(['BetaTester', 'Beta17', 'Roblox.Slack.Models.Contractor.Name', 'Soothsayer']) },
			{ Key: "CountryCode", Value: "kp" },
			{ Key: "UserAbove13", Value: 0 },
			{ Key: "IsAdmin", Value: 0 },
			{ Key: "Password", Value: passHash },
			{ Key: "HasPasswordSet", Value: 0 },
			{ Key: "Updated", Value: "2020-01-01 01:01:01" },
		])
		await db.Disconnect()
		if (!s) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching user: %s', m);
		}

		return	

	}
}
