"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Api_1 = require("../../../../Api");
const FFlag = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetFFlags();
exports.default = {
    method: 'ALL',
    func: (request, response) => {
        const DFFlag = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetDFFlags();
        if (request.method === 'OPTIONS')
            return response.status(200).send({ code: 200, message: '' });
        if (!DFFlag['IsAuthV2Enabled'])
            return response.status(503).send({
                code: 503,
                message: 'The server cannot handle the request (because it is overloaded or down for maintenance)',
                userfacingmessage: 'Service disabled for an unknown amount of time.',
            });
        if (request.protocol !== 'https')
            return response.status(403).send({ code: 403, message: 'https Required.' });
        if (request.method !== 'POST')
            return response.status(405).send({
                code: 405,
                message: `The requested resource does not support https method '${request.method}.'`,
                userfacingmessage: 'Something went wrong.',
            });
        if (FFlag['RequireGlobalhttps'] && request.protocol !== 'https')
            return response.status(403).send({ code: 403, message: 'https Required.' });
        const data = JSON.parse(fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '/lib/env.json', { encoding: 'utf-8' }));
        const AuthToken = request.cookies.AuthToken ||
            request.query.cookie
                .split('; ')
                .find((AuthToken) => AuthToken.startsWith('AuthToken'))
                .split('=')[1];
        if (!AuthToken)
            return response.status(401).send({
                code: 401,
                message: 'Authorization has been denied for this request.',
                userfacingmessage: 'You are not currently logged in.',
            });
        let userId = '';
        for (const i in data['userIds']) {
            if (data['userIds'][i].sessionId !== AuthToken)
                return response.status(404).send({
                    code: 404,
                    message: 'User not found.',
                    userfacingmessage: 'You sent invalid credentials.',
                });
            else
                userId = i;
        }
        data['userIds'][userId].loggedOn = false;
        data['userIds'][userId].sessionId = '';
        fs_1.default.writeFile(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '/lib/env.json', JSON.stringify(data, undefined, 4), () => response
            .clearCookie('AuthToken', { domain: 'sitetest4.robloxlabs.com', path: '/' })
            .send({ success: true, message: 'Success' }));
    },
};
