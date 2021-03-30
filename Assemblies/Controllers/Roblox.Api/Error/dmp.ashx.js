"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Roblox_Util_FastLog_1 = require("../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.LOGGROUP('dmp');
exports.default = {
    method: 'all',
    func: (req, res) => {
        Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], '[FLog::dmp] %S', JSON.stringify(req.query));
        Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], '[FLog::dmp] %S', JSON.stringify(req.body));
        res.status(200).send();
    },
};
