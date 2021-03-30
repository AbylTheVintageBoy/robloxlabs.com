"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Roblox_Util_FastLog_1 = require("../../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.LOGGROUP('Metrics');
exports.default = {
    method: 'all',
    func: (_req, res) => {
        Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['Metrics'], '[FLog::Metrics] %s', JSON.stringify(_req.body));
        res.send();
    },
};
