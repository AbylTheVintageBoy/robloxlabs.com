"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Roblox_Util_FastLog_1 = require("../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.LOGGROUP('EphemeralCountersV2');
exports.default = {
    method: 'all',
    func: (_req, res) => {
        Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['EphemeralCountersV2'], '[FLog::EphemeralCountersV2] %s', JSON.stringify(_req.query));
        Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['EphemeralCountersV2'], '[FLog::EphemeralCountersV2] %s', JSON.stringify(_req.body));
        res.send({ success: true, message: '' });
    },
};
