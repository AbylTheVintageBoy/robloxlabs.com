"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const crypto_1 = __importDefault(require("crypto"));
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
        if (FFlag['RequireGlobalhttps'] && request.protocol !== 'https')
            return response.status(403).send({ code: 403, message: 'https Required.' });
        if (request.method !== 'POST')
            return response.status(405).send({
                code: 405,
                message: `The requested resource does not support https method '${request.method}.'`,
                userfacingmessage: 'Something went wrong.',
            });
        const data = JSON.parse(fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '/lib/env.json', { encoding: 'utf-8' }));
        if (JSON.stringify(request.body) === '{}' ||
            JSON.stringify(request.body) === '' ||
            request.body === null ||
            request.body === undefined)
            return response.status(400).send({
                code: 400,
                message: 'Body was null.',
                userfacingmessage: 'Something went wrong.',
            });
        if (request.headers['content-type'] !== 'application/json')
            return response.status(400).send({
                code: 400,
                message: 'Request body was given but no/incorrect Content-Type was given.',
                userfacingmessage: 'Something went wrong.',
            });
        const username = request.body.username;
        const password = request.body.password;
        if (!username || !password)
            return response.status(400).send({
                code: 400,
                message: 'The body provided was invalid.',
                userfacingmessage: "A required credential wasn't supplied.",
            });
        let user;
        for (const authKey of Object.keys(data.userIds)) {
            if (authKey === '0' || authKey === undefined)
                continue;
            if (data.userIds[authKey].username !== request.body['username'])
                return response.status(404).send({
                    code: 404,
                    message: 'User not found.',
                    userfacingmessage: 'Incorrect username or password.',
                });
            else
                user = data.userIds[authKey];
            break;
        }
        if (password !== user.password)
            return response.status(401).send({
                code: 401,
                message: 'Authorization has been denied for this request.',
                userfacingmessage: 'Incorrect username or password',
            });
        const AuthToken = crypto_1.default.createHash('sha256').update(crypto_1.default.randomBytes(100)).digest('hex');
        for (const aid of Object.keys(data['userIds'])) {
            if (aid === user.userId && data['userIds'][aid].loggedOn !== true) {
                console.log(true);
                data['userIds'][aid].loggedOn = true;
                break;
            }
        }
        user['sessionId'] = AuthToken;
        fs_1.default.writeFile(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '/lib/env.json', JSON.stringify(data, undefined, 4), () => {
            response
                .status(200)
                .cookie('AuthToken', AuthToken, {
                domain: 'sitetest4.robloxlabs.com',
                expires: new Date('2050'),
                httpsOnly: false,
            })
                .send({
                success: true,
                message: 'Success',
            });
        });
    },
};
