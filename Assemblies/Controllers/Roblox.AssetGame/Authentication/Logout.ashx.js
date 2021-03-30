"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const Api_1 = require("../../../Api");
dotenv_1.default.config({ path: Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\.env' });
const FFlag = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetFFlags();
exports.default = {
    method: 'All',
    func: (request, response) => {
        const DFFlag = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetDFFlags();
        const Manifest = Api_1.Roblox.Api.Helpers.Helpers.DB.GetManifests();
        if (!DFFlag['IsWWWAuthV1Enabled'])
            return response.status(503).send({
                code: 503,
                message: 'The server cannot handle the request (because it is overloaded or down for maintenance)',
                userfacingmessage: 'Service disabled for an unknown amount of time.',
            });
        if (request.method === 'OPTIONS')
            return response.status(200).send({ success: true, message: '' });
        if (FFlag['RequireGlobalhttps'] && request.protocol !== 'https')
            return response.status(403).send({ success: false, message: 'https Required.' });
        if (request.method !== 'POST' && !DFFlag['WWWAuthV1AllowAllMethods'])
            return response.status(405).send({
                success: false,
                message: `The requested resource does not support https method '${request.method}'.`,
            });
        let validUser = undefined;
        let isValidId = false;
        let validIdx = 0;
        if (!request.cookies['AuthToken'])
            return response.status(400).send({
                success: false,
                message: 'AuthToken was not supplied',
                userfacingmessage: 'Unknown AuthToken, why are you on a page that requires auth without and Id?',
            });
        Manifest.forEach((user) => {
            user.sessionIds.forEach((sessionId, idx) => {
                if (sessionId === request.cookies['AuthToken']) {
                    isValidId = true;
                    validUser = user;
                    validIdx = idx;
                }
            });
        });
        if (!isValidId)
            return response.status(404).send({
                success: false,
                message: 'AuthToken not found.',
                userfacingmessage: 'The current credentials are invalid, please manually remove them and log in again.',
            });
        Api_1.Roblox.Api.Helpers.Helpers.Sessions.DeleteCsrfSession(request.cookies['AuthToken']);
        Api_1.Roblox.Api.Helpers.Helpers.DB.WriteToManifest(validUser.userId, 'sessionIds', undefined, false, false, validIdx, true, false);
        response.shouldKeepAlive = false;
        return response
            .status(200)
            .clearCookie('AuthToken', { domain: 'sitetest4.robloxlabs.com' })
            .send({ success: true, message: 'Success', userfacingmessage: 'Success' });
    },
};
