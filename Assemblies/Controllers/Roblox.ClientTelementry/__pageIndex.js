"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Roblox_Util_FastLog_1 = require("../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.LOGGROUP('ClientTelementry');
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['ClientTelementry'], '[FLog::ClientTelementry] %s', _req.body);
        return res.send();
    },
};
