"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const crypto_1 = __importDefault(require("crypto"));
const Roblox_Util_FastLog_1 = require("../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
const Api_1 = require("../../../Api");
dotenv_1.default.config({ path: Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\.env' });
Roblox_Util_FastLog_1.FASTFLAG('RequireGlobalHTTPS');
Roblox_Util_FastLog_1.DYNAMIC_FASTFLAGVARIABLE('IsWWWAuthV1Enabled', true);
Roblox_Util_FastLog_1.DYNAMIC_FASTFLAGVARIABLE('WWWAuthV1AllowAllMethods', false);
Roblox_Util_FastLog_1.DYNAMIC_FASTINTVARIABLE('WWWAuthV1MaxAuthTokenAge', 94610000 * 10000);
Roblox_Util_FastLog_1.LOGGROUP('WWWAuthV1');
exports.default = {
    method: 'All',
    func: (request, response) => {
        const Manifest = Api_1.Roblox.Api.Helpers.Helpers.DB.GetManifests();
        if (!Roblox_Util_FastLog_1.DFFlag('IsWWWAuthV1Enabled')) {
            Roblox_Util_FastLog_1.FASTLOG(Roblox_Util_FastLog_1.FLog['WWWAuthV1'], '[FLog::WWWAuthV1] The service is currently disabled.');
            return response.status(503).send({
                code: 503,
                message: 'The server cannot handle the request (because it is overloaded or down for maintenance)',
                userfacingmessage: 'Service unavailable.',
            });
        }
        if (request.method === 'OPTIONS')
            return response.status(200).send({ success: true, message: '' });
        if (Roblox_Util_FastLog_1.FFlag['RequireGlobalHTTPS'] && request.protocol !== 'https') {
            Roblox_Util_FastLog_1.FASTLOG(Roblox_Util_FastLog_1.FLog['WWWAuthV1'], '[FLog::WWWAuthV1] HTTPS was not given where it was needed.');
            return response.status(403).send({ success: false, message: 'HTTPS Required.' });
        }
        if (request.method !== 'POST' && !Roblox_Util_FastLog_1.DFFlag('WWWAuthV1AllowAllMethods')) {
            Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['WWWAuthV1'], `[FLog::WWWAuthV1] The method %s is not supported`, request.method);
            return response.status(405).send({
                success: false,
                message: `The requested resource does not support HTTP method '${request.method}'.`,
            });
        }
        let validUser = undefined;
        let isValidId = false;
        if (!request.cookies['AuthToken']) {
            Roblox_Util_FastLog_1.FASTLOG(Roblox_Util_FastLog_1.FLog['WWWAuthV1'], '[FLog::WWWAuthV1] AuthToken did not exist on the request.');
            return response.status(400).send({
                success: false,
                message: 'AuthToken was not supplied',
                userfacingmessage: 'Unknown AuthToken, why are you on a page that requires auth without and Id?',
            });
        }
        Manifest.forEach((user) => {
            user.sessionIds.forEach((sessionId) => {
                if (sessionId === request.cookies['AuthToken']) {
                    isValidId = true;
                    validUser = user;
                }
            });
        });
        if (!isValidId) {
            Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['WWWAuthV1'], `[FLog::WWWAuthV1] The user matching %s was not found.`, request.cookies['AuthToken']);
            return response.status(404).send({
                success: false,
                message: 'AuthToken not found.',
                userfacingmessage: 'The current credentials are invalid, please manually remove them and log in again.',
            });
        }
        Api_1.Roblox.Api.Helpers.Helpers.Sessions.DeleteCsrfSession(request.cookies['AuthToken']);
        Api_1.Roblox.Api.Helpers.Helpers.DB.WriteToManifest(validUser.userId, 'sessionIds', [], false, false, 0, false, false);
        const AuthToken = crypto_1.default.createHash('sha512').update(crypto_1.default.randomBytes(1000)).digest('hex');
        Api_1.Roblox.Api.Helpers.Helpers.DB.WriteToManifest(validUser.userId, 'sessionIds', AuthToken, true, false, 0, false, false);
        Api_1.Roblox.Api.Helpers.Helpers.Sessions.CreateCsrfSessionFile(AuthToken);
        response.shouldKeepAlive = false;
        Roblox_Util_FastLog_1.FASTLOG3(Roblox_Util_FastLog_1.FLog['WWWAuthV1'], `Successfully cleared all sessions of %s [%s-%s]`, validUser.username.toString(), validUser.userId, request.cookies['AuthToken']);
        return response
            .status(200)
            .cookie('AuthToken', AuthToken, {
            maxAge: Roblox_Util_FastLog_1.DFInt('WWWAuthV1MaxAuthTokenAge'),
            domain: 'sitetest4.robloxlabs.com',
            secure: false,
            sameSite: 'lax',
            httpOnly: true,
        })
            .send({ success: true, message: 'Success', userfacingmessage: 'Success' });
    },
};
