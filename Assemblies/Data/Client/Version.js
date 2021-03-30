"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = void 0;
const Roblox_Util_FastLog_1 = require("../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.DYNAMIC_FASTSTRINGVARIABLE('WebVersion', '0.001.0.000001');
var Version;
(function (Version) {
    function GetVersion() {
        return Roblox_Util_FastLog_1.DFString('WebVersion');
    }
    Version.GetVersion = GetVersion;
})(Version = exports.Version || (exports.Version = {}));
