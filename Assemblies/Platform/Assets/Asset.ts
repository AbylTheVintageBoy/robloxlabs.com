import { DFLog, FASTLOGS } from '../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog';
import { Task } from '../../Http/Task';
import { PartialDataBase } from '../../PartialDatabase/PartialDataBase';
import { PartialDatabaseConditionType } from '../../PartialDatabase/PartialDatabaseConditionType';
import { IAssetVersion } from './IAssetVersion'
export class Asset implements Roblox.Platform.Assets.IAsset {
	public TypeId: System.Int32;
	public Name: System.String;
	public Description: System.String;
	public CreatorType: Roblox.Platform.Core.CreatorType;
	public CreatorTargetId: System.Int64;
	public AssetGenres: System.Int64;
	public IsArchived: Roblox.Platform.SQLBoolean;
	public Updated: System.DateTime;
	public Created: System.DateTime;

	public Id: System.Int64;
	public CurrentAVID: System.Int64;

	public static async GetFromID(Id: number) :Task<Roblox.Platform.Assets.IAsset>{
		const db = new PartialDataBase('RobloxAssets', 'root', 'Io9/9DEF');
		const [didConnect, err] = await db.Connect();
		if (!didConnect) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching asset: %s', err);
			return null;
		}
		const [, , assets] = db.GetTable<Roblox.Platform.Assets.IAsset>('asset', 'Id', true);
		const [success, message, result] = await assets.SelectKeysWhere(['TypeId', 'Name', 'Description', 'CreatorType', 'CreatorTargetId', 'AssetGenres', 'IsArchived', 'Updated','Created', 'Id', 'CurrentAVID'], {
			Key: 'Id',
			Condition: PartialDatabaseConditionType.Equal,
			Value: Id,
		});
		if (!success) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching asset: %s', message);
			return null;
		}
		const thisSession = result.Rows[0];
		if (!thisSession) return null;
		const newAsset = new Asset();
		newAsset.TypeId = <number>thisSession.Data[0].Value;
		newAsset.Name = <string>thisSession.Data[1].Value;
		newAsset.Description = <string>thisSession.Data[2].Value;
		newAsset.CreatorType = <Roblox.Platform.Core.CreatorType>thisSession.Data[3].Value;
		newAsset.CreatorTargetId = <number>thisSession.Data[4].Value;
		newAsset.AssetGenres = <number>thisSession.Data[5].Value;
		newAsset.IsArchived = <Roblox.Platform.SQLBoolean>thisSession.Data[6].Value;
		newAsset.Updated = <System.DateTime>thisSession.Data[7].Value;
		newAsset.Created = <System.DateTime>thisSession.Data[8].Value;
		newAsset.Id = <number>thisSession.Data[9].Value;
		newAsset.CurrentAVID = <number>thisSession.Data[10].Value;
		return newAsset;




	}

	public static async CreateAsset(Name: string, Description: string): Task<Roblox.Platform.Assets.IAsset> {
		const db = new PartialDataBase('RobloxAssets', 'root', 'Io9/9DEF');
		const [didConnect, err] = await db.Connect();
		if (!didConnect) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching asset: %s', err);
			return null;
		}
		const [, , assets] = db.GetTable<Roblox.Platform.Assets.IAsset>('asset', 'Id', true);
			const [s, m] = await assets.InsertValues([
			{ Key: "Name", Value: Name },
			{ Key: "Description", Value: Description },
			])//insert other stuff later.
		if (!s) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when creating asset: %s', m);

		}
		const [success, message, result] = await assets.SelectKeysWhere(['TypeId', 'Name', 'Description', 'CreatorType', 'CreatorTargetId', 'AssetGenres', 'IsArchived', 'Updated', 'Created', 'Id', 'CurrentAVID'], {
			Key: 'Name',
			Condition: PartialDatabaseConditionType.Equal,
			Value: Name,
		});//Temporary.
		if (!success) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching asset: %s', message);
			return null;
		}
		const thisSession = result.Rows[0];
		if (!thisSession) return null;
		const newAsset = new Asset();
		newAsset.TypeId = <number>thisSession.Data[0].Value;
		newAsset.Name = <string>thisSession.Data[1].Value;
		newAsset.Description = <string>thisSession.Data[2].Value;
		newAsset.CreatorType = <Roblox.Platform.Core.CreatorType>thisSession.Data[3].Value;
		newAsset.CreatorTargetId = <number>thisSession.Data[4].Value;
		newAsset.AssetGenres = <number>thisSession.Data[5].Value;
		newAsset.IsArchived = <Roblox.Platform.SQLBoolean>thisSession.Data[6].Value;
		newAsset.Updated = <System.DateTime>thisSession.Data[7].Value;
		newAsset.Created = <System.DateTime>thisSession.Data[8].Value;
		newAsset.Id = <number>thisSession.Data[9].Value;
		newAsset.CurrentAVID = <number>thisSession.Data[10].Value;
		return newAsset;
	}
	public static async CreateAssetVersion(Id: number, Hash: string) {
		const db = new PartialDataBase('RobloxAssets', 'root', 'Io9/9DEF');
		const [didConnect, err] = await db.Connect();
		if (!didConnect) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when fetching asset: %s', err);
			return null;
		}
		const [, , assetsver] = db.GetTable<IAssetVersion>('asset', 'Id', true);
		const [, , assets] = db.GetTable<Roblox.Platform.Assets.IAsset>('asset', 'Id', true);

		
		const [success, message, ,] = await assets.SelectKeysWhere(['TypeId', 'Name', 'Description', 'CreatorType', 'CreatorTargetId', 'AssetGenres', 'IsArchived', 'Updated', 'Created', 'Id', 'CurrentAVID'], {
			Key: 'Id',
			Condition: PartialDatabaseConditionType.Equal,
			Value: Id,
		});
		if (!success) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when creating asset: %s', message);
			return null;
		}
		const [s, m] = await assetsver.InsertValues([
			{ Key: "assetId", Value: Id },
			{ Key: "Hash", Value: Hash },
			{ Key: "AssetIdAndHash", Value: Hash + Id.toString() }

		])//insert other stuff later.
		if (!s) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when creating asset: %s', m);
		}
		const [s3, m3, r3] = await assetsver.SelectKeyWhere('Id', 
			{
				Key: 'AssetIdAndHash',
				Condition: PartialDatabaseConditionType.Equal,
				Value: Hash + Id.toString(),
			}
		)
		if (!s3) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when creating asset: %s', m3);
		}
		let e = <number>r3.Rows[0].Data[0].Value
		const [s2, m2] = await assets.UpdateKey('CurrentAVID', e,{
			Key: 'Id',
			Condition: PartialDatabaseConditionType.Equal,
			Value: Id,
		})
		
		if (!s2) {
			FASTLOGS(DFLog('Tasks'), '[DFLog::Tasks] Error when creating asset: %s', m2);
		}

	}
}