"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const Api_1 = require("../../../../Api");
const FString = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetFStrings();
const FInt = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetFInts();
const FFlag = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetFFlags();
exports.default = {
    method: 'ALL',
    func: (request, response) => {
        const DFFlag = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetDFFlags();
        if (request.method === 'OPTIONS')
            return response.status(200).send({ success: true, message: '' });
        if (!DFFlag['IsCaptchaV2Enabled'])
            return response.status(503).send({
                success: false,
                message: 'The server cannot handle the request (because it is overloaded or down for maintenance)',
                userfacingmessage: 'Service disabled for an unknown amount of time.',
            });
        if (FFlag['RequireGlobalhttps'] && request.protocol !== 'https')
            return response.status(403).send({ success: false, message: 'https Required.' });
        if (request.method !== 'POST')
            return response.status(405).send({
                success: false,
                message: `The requested resource does not support https method '${request.method}.'`,
                userfacingmessage: 'Something went wrong.',
            });
        if (JSON.stringify(request.body) === '{}')
            return response.status(400).send({
                success: false,
                message: 'No body was provided.',
            });
        if (request.body && request.headers['content-type'] !== 'application/x-www-form-urlencoded')
            return response.status(400).send({
                success: false,
                message: `The Content-Type ${request.headers['content-type']} is not supported.`,
            });
        if (!request.body['captchaHash'] || !request.body['captchaProvider'])
            return response.status(400).send({
                success: false,
                message: 'The body provided was invalid.',
                userfacingmessage: 'The provided credentials were invalid.',
            });
        if (request.body['captchaProvider'] !== FString['CaptchaV2CaptchaProvider'])
            return response
                .status(400)
                .header({
                'access-control-expose-headers': 'ROBLOX-CAPTCHA-PROVIDER, API-TRANSFER',
                'mfd-captcha-provider': FString['CaptchaV2CaptchaProvider'],
                'api-transfer': 'Expose-Captcha-V2-Provider#503',
            })
                .send({ success: false, message: 'The current CAPTCHA_PROVIDER is not valid' });
        const Sessions = Api_1.Roblox.Api.Helpers.Helpers.DB.GetSessions();
        if (!Sessions.get(request.body['captchaHash']))
            return response.status(404).send({
                success: false,
                message: 'The captchaToken supplied is not valid.',
                userfacingmessage: 'Bad Token Request',
            });
        const imageCache = Api_1.Roblox.Api.Helpers.Helpers.Auth.GetImageHashes();
        const images = [];
        const newHash = request.body['captchaHash'] + '0x0ff';
        fs_1.default.writeFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + `\\Manifest\\sessions\\${newHash}.json`, JSON.stringify(Sessions.get(request.body['captchaHash'])), {
            encoding: 'utf-8',
        });
        Api_1.Roblox.Api.Helpers.Helpers.Sessions.DeleteCaptchaSession(request.body['captchaHash']);
        setTimeout(() => {
            try {
                fs_1.default.unlinkSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + `\\Manifest\\sessions\\${newHash}.json`);
            }
            catch {
                console.warn('The session is not persistent anymore.');
            }
        }, FInt['CaptchaV2TimeoutAdditionAfter200GetImageHashes']);
        imageCache.forEach((v) => {
            const hash = crypto_1.default.createHash('sha512').update(crypto_1.default.randomBytes(1000)).digest('hex');
            images.push({ imageHash: hash, imageUri: v.uri });
            if (v.correct)
                Api_1.Roblox.Api.Helpers.Helpers.Sessions.SetCaptchaSessiontField(newHash, 'answer', hash, true, false, false, 0, false, true);
        });
        response
            .status(200)
            .contentType('application/json')
            .send({
            data: Api_1.Roblox.Api.Helpers.Util.ShuffleArray(images),
            captchaHash: newHash,
            expires: FInt['CaptchaV2TimeoutAdditionAfter200GetImageHashes'],
        });
    },
};
