"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Roblox_Util_FastLog_1 = require("../../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
const Api_1 = require("../../../../Api");
Roblox_Util_FastLog_1.FASTFLAG('RequireGlobalHTTPS');
Roblox_Util_FastLog_1.DYNAMIC_FASTFLAGVARIABLE('IsCSRFV2Enabled', true);
Roblox_Util_FastLog_1.LOGGROUP('CsrfAPIV1');
exports.default = {
    method: 'ALL',
    func: (request, response) => {
        if (!Roblox_Util_FastLog_1.DFFlag('IsCSRFV2Enabled')) {
            Roblox_Util_FastLog_1.FASTLOG(Roblox_Util_FastLog_1.FLog['CsrfAPIV1'], '[FLog::CsrfAPIV1] The service is disabled currently.');
            return response.status(503).send({
                success: false,
                message: 'The server cannot handle the request (because it is overloaded or down for maintenance)',
                userfacingmessage: 'Service disabled for an unknown amount of time.',
            });
        }
        if (request.method === 'OPTIONS')
            return response.status(200).send({ success: true, message: '' });
        if (Roblox_Util_FastLog_1.FFlag['RequireGlobalHTTPS'] && request.protocol !== 'https') {
            Roblox_Util_FastLog_1.FASTLOG(Roblox_Util_FastLog_1.FLog['CsrfAPIV1'], 'https was not given where it was required.');
            return response.status(403).send({ success: false, message: 'HTTPS Required.' });
        }
        if (request.method !== 'POST') {
            Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['CsrfAPIV1'], `[FLog::CsrfAPIV1] The request metod '%s' is not supported`, request.method);
            return response.status(405).send({
                success: false,
                message: `The requested resource does not support HTTP method '${request.method}'.`,
            });
        }
        const res = Api_1.Roblox.Api.Helpers.Helpers.Sessions.CreateOrGetXsrfSession(request.cookies['AuthToken'], request.ip, request.headers['x-csrf-token'], response, true);
        console.log(res);
        if (!res) {
            Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.FLog['CsrfAPIV1'], `[FLog::CsrfAPIV1] Gave CSRF for subject %s [%s], the session probably didn't exist.`, request.cookies['AuthToken'] || 'No AuthToken', request.ip);
            return;
        }
        Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.FLog['CsrfAPIV1'], `[FLog::CsrfAPIV1] Gave CSRF for subject %s [%s], the session probably did exist.`, request.cookies['AuthToken'] || 'No AuthToken', request.ip);
    },
};
