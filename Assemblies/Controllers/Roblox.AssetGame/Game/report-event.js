"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Roblox_Util_FastLog_1 = require("../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.LOGGROUP('Events');
exports.default = {
    method: 'all',
    func: (_req, res) => {
        Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['Events'], '[FLog::Events] %s', JSON.stringify(_req.query));
        Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['Events'], '[FLog::Events] %s', JSON.stringify(_req.body));
        res.send({ success: true, message: '' });
    },
};
