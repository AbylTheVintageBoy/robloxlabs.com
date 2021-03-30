"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Roblox_Util_ClientSettings_1 = require("../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.ClientSettings");
const Roblox_Util_FastLog_1 = require("../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.FASTFLAG('RequireGlobalHTTPS');
Roblox_Util_FastLog_1.DYNAMIC_FASTFLAGVARIABLE('IsClientSettingsAPIEnabled', true);
Roblox_Util_FastLog_1.LOGGROUP('ClientSettingsAPIV1');
exports.default = {
    method: 'all',
    func: (request, response) => {
        if (!Roblox_Util_FastLog_1.DFFlag('IsClientSettingsAPIEnabled')) {
            Roblox_Util_FastLog_1.FASTLOG(Roblox_Util_FastLog_1.FLog['ClientSettingsAPIV1'], '[FLog::ClientSettingsAPIV1] The service is disabled currently.');
            return response.status(503).send({
                code: 503,
                message: 'The server cannot handle the request (because it is overloaded or down for maintenance)',
                userfacingmessage: 'Service disabled for an unknown amount of time.',
            });
        }
        if (request.method === 'OPTIONS')
            return response.status(200).send({ success: true, message: '' });
        if (Roblox_Util_FastLog_1.FFlag['RequireGlobalHTTPS'] && request.protocol !== 'https') {
            Roblox_Util_FastLog_1.FASTLOG(Roblox_Util_FastLog_1.FLog['ClientSettingsAPIV1'], '[FLog::ClientSettingsAPIV1] HTTPS was not given where it was needed.');
            return response.status(403).send({ success: false, message: 'HTTPS Required.' });
        }
        if (request.method !== 'GET') {
            Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['ClientSettingsAPIV1'], `[FLog::ClientSettingsAPIV1] The method %s is not supported`, request.method);
            return response.status(405).send({
                success: false,
                message: `The requested resource does not support https method '${request.method}'.`,
            });
        }
        if (!request.query['settingsGroup']) {
            Roblox_Util_FastLog_1.FASTLOG(Roblox_Util_FastLog_1.FLog['ClientSettingsAPIV1'], '[FLog::ClientSettingsAPIV1] settingsGroup did not exist on the request.');
            return response.status(400).send({ success: false, message: 'settingsGroup was not supplied' });
        }
        let found = false;
        Roblox_Util_FastLog_1.FSettings.forEach((v) => {
            if (v === request.query['settingsGroup']) {
                found = true;
            }
        });
        if (!found) {
            Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['ClientSettingsAPIV1'], `[FLog::ClientSettingsAPIV1] The settingsGroup matching %s was not found.`, request.query['settingsGroup']);
            return response.status(404).send({
                success: false,
                message: 'settingsGroup not found.',
                userfacingmessage: `The settingsGroup matching ${request.query['settingsGroup']} was not found.`,
            });
        }
        Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['ClientSettingsAPIV1'], `[FLog::ClientSettingsAPIV1] Successfully got settings for %s`, request.query['settingsGroup']);
        return response.status(200).send(JSON.stringify(Roblox_Util_ClientSettings_1.ClientSettings.GetAllSettings(request.query['settingsGroup'])));
    },
};
