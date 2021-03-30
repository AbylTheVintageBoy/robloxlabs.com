"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DYNAMIC_FASTSTRINGVARIABLE = exports.DYNAMIC_FASTSTRING = exports.FASTSTRINGVARIABLE = exports.FASTSTRING = exports.SYNCHRONIZED_FASTINTVARIABLE = exports.SYNCHRONIZED_FASTINT = exports.DYNAMIC_FASTINTVARIABLE = exports.DYNAMIC_FASTINT = exports.FASTINTVARIABLE = exports.FASTINT = exports.SYNCHRONIZED_FASTFLAGVARIABLE = exports.SYNCHRONIZED_FASTFLAG = exports.DYNAMIC_FASTFLAGVARIABLE = exports.DYNAMIC_FASTFLAG = exports.FASTFLAGVARIABLE = exports.FASTFLAG = exports.SYNCHRONIZED_LOGVARIABLE = exports.SYNCHRONIZED_LOGGROUP = exports.DYNAMIC_LOGVARIABLE = exports.DYNAMIC_LOGGROUP = exports.LOGVARIABLE = exports.LOGGROUP = exports.FASTLOGNOFILTER2 = exports.FASTLOGNOFILTER = exports.FASTLOG4F = exports.FASTLOG3F = exports.FASTLOG2F = exports.FASTLOG1F = exports.FASTLOGS = exports.FASTLOG5 = exports.FASTLOG4 = exports.FASTLOG3 = exports.FASTLOG2 = exports.FASTLOG1 = exports.FASTLOG = exports.d = exports.FSettings = exports.SFString = exports.DFString = exports.FString = exports.SFInt = exports.DFInt = exports.FInt = exports.SFFlag = exports.DFFlag = exports.FFlag = exports.SFLog = exports.DFLog = exports.FLog = exports.cache = void 0;
exports.SYNCHRONIZED_FASTSTRINGVARIABLE = exports.SYNCHRONIZED_FASTSTRING = void 0;
const Roblox_Util_ClientSettings_1 = require("./Roblox.Util.ClientSettings");
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: Directories_1._dirname + '\\.env' });
exports.cache = {
    DFLog: new Map(),
    DFFlag: new Map(),
    DFInt: new Map(),
    DFString: new Map(),
};
exports.FLog = {};
const DFLog = function (name) {
    const df = Roblox_Util_ClientSettings_1.ClientSettings.GetDFLogs();
    if (df) {
        new Map(Object.entries(df)).forEach((value, key) => {
            exports.cache.DFLog[key] = value;
        });
    }
    return df[name] || exports.cache.DFLog[name] || 0;
};
exports.DFLog = DFLog;
exports.SFLog = {};
exports.FFlag = {};
const DFFlag = function (name) {
    const df = Roblox_Util_ClientSettings_1.ClientSettings.GetDFFlags();
    if (df) {
        new Map(Object.entries(df)).forEach((value, key) => {
            exports.cache.DFFlag[key] = value;
        });
    }
    return df[name] || exports.cache.DFFlag[name] || false;
};
exports.DFFlag = DFFlag;
exports.SFFlag = {};
exports.FInt = {};
const DFInt = function (name) {
    const df = Roblox_Util_ClientSettings_1.ClientSettings.GetDFInts();
    if (df) {
        new Map(Object.entries(df)).forEach((value, key) => {
            exports.cache.DFInt[key] = value;
        });
    }
    return df[name] || exports.cache.DFInt[name] || 0;
};
exports.DFInt = DFInt;
exports.SFInt = {};
exports.FString = {};
const DFString = function (name) {
    const df = Roblox_Util_ClientSettings_1.ClientSettings.GetDFStrings();
    if (df) {
        new Map(Object.entries(df)).forEach((value, key) => {
            exports.cache.DFString[key] = value;
        });
    }
    return df[name] || exports.cache.DFString[name] || '';
};
exports.DFString = DFString;
exports.SFString = {};
exports.FSettings = [];
exports.d = {
    setup: false,
};
const parameterizedString = (...args) => {
    const string = args[0];
    let i = 1;
    return string.replace(/%((%)|s|d|f|lf|i|x|X|u)/g, function (m) {
        let val = null;
        if (m[2]) {
            val = m[2];
        }
        else {
            val = args[i];
            if (val !== null) {
                switch (m) {
                    case '%d' || '%f' || '%lf':
                        val = parseFloat(val);
                        if (isNaN(val)) {
                            val = 0;
                        }
                        break;
                    case '%i' || '%u':
                        val = parseInt(val);
                        if (isNaN(val)) {
                            val = 0;
                        }
                        break;
                    case '%x':
                        val = val.toString(16).toLowerCase();
                        break;
                    case '%X':
                        val = val.toString(16).toUpperCase();
                        break;
                }
            }
            i++;
        }
        return val;
    });
};
function setUpFLog() {
    const f = Roblox_Util_ClientSettings_1.ClientSettings.GetFLogs();
    const df = Roblox_Util_ClientSettings_1.ClientSettings.GetDFLogs();
    const sf = Roblox_Util_ClientSettings_1.ClientSettings.GetSFLogs();
    const ff = Roblox_Util_ClientSettings_1.ClientSettings.GetFFlags();
    const dff = Roblox_Util_ClientSettings_1.ClientSettings.GetDFFlags();
    const sff = Roblox_Util_ClientSettings_1.ClientSettings.GetSFFlags();
    const fi = Roblox_Util_ClientSettings_1.ClientSettings.GetFInts();
    const dfi = Roblox_Util_ClientSettings_1.ClientSettings.GetDFInts();
    const sfi = Roblox_Util_ClientSettings_1.ClientSettings.GetSFInts();
    const fs = Roblox_Util_ClientSettings_1.ClientSettings.GetFStrings();
    const dfs = Roblox_Util_ClientSettings_1.ClientSettings.GetDFStrings();
    const sfs = Roblox_Util_ClientSettings_1.ClientSettings.GetSFStrings();
    const fss = Roblox_Util_ClientSettings_1.ClientSettings.GetFSettings();
    if (f) {
        new Map(Object.entries(f)).forEach((value, key) => {
            exports.FLog[key] = value;
        });
    }
    if (df) {
        new Map(Object.entries(df)).forEach((value, key) => {
            exports.cache.DFLog[key] = value;
        });
    }
    if (sf) {
        new Map(Object.entries(sf)).forEach((value, key) => {
            exports.SFLog[key] = value;
        });
    }
    if (ff) {
        new Map(Object.entries(ff)).forEach((value, key) => {
            exports.FFlag[key] = value;
        });
    }
    if (dff) {
        new Map(Object.entries(dff)).forEach((value, key) => {
            exports.cache.DFFlag[key] = value;
        });
    }
    if (sff) {
        new Map(Object.entries(sff)).forEach((value, key) => {
            exports.SFFlag[key] = value;
        });
    }
    if (fi) {
        new Map(Object.entries(fi)).forEach((value, key) => {
            exports.FInt[key] = value;
        });
    }
    if (dfi) {
        new Map(Object.entries(dfi)).forEach((value, key) => {
            exports.cache.DFInt[key] = value;
        });
    }
    if (sfi) {
        new Map(Object.entries(sfi)).forEach((value, key) => {
            exports.SFInt[key] = value;
        });
    }
    if (fs) {
        new Map(Object.entries(fs)).forEach((value, key) => {
            exports.FString[key] = value;
        });
    }
    if (dfs) {
        new Map(Object.entries(dfs)).forEach((value, key) => {
            exports.cache.DFString[key] = value;
        });
    }
    if (sfs) {
        new Map(Object.entries(sfs)).forEach((value, key) => {
            exports.SFString[key] = value;
        });
    }
    if (fss) {
        fss.forEach((element) => {
            exports.FSettings.push(element);
        });
    }
    exports.d.setup = true;
}
function printMessage(level, threadId, timeStamp, message, arg0, arg1, arg2, arg3, arg4) {
    const formatted = parameterizedString(message, arg0, arg1, arg2, arg3, arg4);
    const out = `${timeStamp},${process.uptime().toPrecision(6)},${threadId.toString(16)},${Math.floor(level) || 1} ${formatted}`;
    console.log(out);
    if (level >= 7)
        fs_1.default.appendFileSync(Directories_1._dirname + `\\server.log`, `${out}\n`, {
            encoding: 'utf-8',
        });
}
function FastLog(level, message, arg0, arg1, arg2, arg3, arg4) {
    if (level > 5) {
        printMessage(level, process.pid, new Date(Date.now()).toISOString(), message, arg0, arg1, arg2, arg3, arg4);
    }
}
const FASTLOG = (group, message) => {
    do {
        if (group)
            FastLog(group, message, null, null, null, null, null);
    } while (0);
};
exports.FASTLOG = FASTLOG;
const FASTLOG1 = (group, message, arg0) => {
    do {
        if (group)
            FastLog(group, message, arg0, null, null, null, null);
    } while (0);
};
exports.FASTLOG1 = FASTLOG1;
const FASTLOG2 = (group, message, arg0, arg1) => {
    do {
        if (group)
            FastLog(group, message, arg0, arg1, null, null, null);
    } while (0);
};
exports.FASTLOG2 = FASTLOG2;
const FASTLOG3 = (group, message, arg0, arg1, arg2) => {
    do {
        if (group)
            FastLog(group, message, arg0, arg1, arg2, null, null);
    } while (0);
};
exports.FASTLOG3 = FASTLOG3;
const FASTLOG4 = (group, message, arg0, arg1, arg2, arg3) => {
    do {
        if (group)
            FastLog(group, message, arg0, arg1, arg2, arg3, null);
    } while (0);
};
exports.FASTLOG4 = FASTLOG4;
const FASTLOG5 = (group, message, arg0, arg1, arg2, arg3, arg4) => {
    do {
        if (group)
            FastLog(group, message, arg0, arg1, arg2, arg3, arg4);
    } while (0);
};
exports.FASTLOG5 = FASTLOG5;
const FASTLOGS = (group, message, sarg) => {
    do {
        if (group)
            FastLog(group, message, sarg, null, null, null, null);
    } while (0);
};
exports.FASTLOGS = FASTLOGS;
const FASTLOG1F = (group, message, arg0) => {
    do {
        if (group)
            FastLog(group, message, arg0, null, null, null, null);
    } while (0);
};
exports.FASTLOG1F = FASTLOG1F;
const FASTLOG2F = (group, message, arg0, arg1) => {
    do {
        if (group)
            FastLog(group, message, arg0, arg1, null, null, null);
    } while (0);
};
exports.FASTLOG2F = FASTLOG2F;
const FASTLOG3F = (group, message, arg0, arg1, arg2) => {
    do {
        if (group)
            FastLog(group, message, arg0, arg1, arg2, null, null);
    } while (0);
};
exports.FASTLOG3F = FASTLOG3F;
const FASTLOG4F = (group, message, arg0, arg1, arg2, arg3) => {
    do {
        if (group)
            FastLog(group, message, arg0, arg1, arg2, arg3, null);
    } while (0);
};
exports.FASTLOG4F = FASTLOG4F;
const FASTLOGNOFILTER = (group, message) => {
    FastLog(group, message, null, null, null, null, null);
};
exports.FASTLOGNOFILTER = FASTLOGNOFILTER;
const FASTLOGNOFILTER2 = (group, message, arg0, arg1) => {
    FastLog(group, message, arg0, arg1, null, null, null);
};
exports.FASTLOGNOFILTER2 = FASTLOGNOFILTER2;
const LOGGROUP = (group) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.FLog[group] === undefined)
        exports.FLog[group] = 0;
};
exports.LOGGROUP = LOGGROUP;
const LOGVARIABLE = (group, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.FLog[group] = exports.FLog[group] || defaulton;
};
exports.LOGVARIABLE = LOGVARIABLE;
const DYNAMIC_LOGGROUP = (group) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.cache.DFLog[group] === undefined)
        exports.cache.DFLog[group] = 0;
};
exports.DYNAMIC_LOGGROUP = DYNAMIC_LOGGROUP;
const DYNAMIC_LOGVARIABLE = (group, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.cache.DFLog[group] = exports.cache.DFLog[group] || defaulton;
};
exports.DYNAMIC_LOGVARIABLE = DYNAMIC_LOGVARIABLE;
const SYNCHRONIZED_LOGGROUP = (group) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.SFLog[group] === undefined)
        exports.SFLog[group] = 0;
};
exports.SYNCHRONIZED_LOGGROUP = SYNCHRONIZED_LOGGROUP;
const SYNCHRONIZED_LOGVARIABLE = (group, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.SFLog[group] = exports.SFLog[group] || defaulton;
};
exports.SYNCHRONIZED_LOGVARIABLE = SYNCHRONIZED_LOGVARIABLE;
const FASTFLAG = (v) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.FFlag[v] === undefined)
        exports.FFlag[v] = false;
};
exports.FASTFLAG = FASTFLAG;
const FASTFLAGVARIABLE = (v, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.FFlag[v] = exports.FFlag[v] || defaulton;
};
exports.FASTFLAGVARIABLE = FASTFLAGVARIABLE;
const DYNAMIC_FASTFLAG = (v) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.cache.DFFlag[v] === undefined)
        exports.cache.DFFlag[v] = false;
};
exports.DYNAMIC_FASTFLAG = DYNAMIC_FASTFLAG;
const DYNAMIC_FASTFLAGVARIABLE = (v, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.cache.DFFlag[v] = exports.cache.DFFlag[v] || defaulton;
};
exports.DYNAMIC_FASTFLAGVARIABLE = DYNAMIC_FASTFLAGVARIABLE;
const SYNCHRONIZED_FASTFLAG = (v) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.SFFlag[v] === undefined)
        exports.SFFlag[v] = false;
};
exports.SYNCHRONIZED_FASTFLAG = SYNCHRONIZED_FASTFLAG;
const SYNCHRONIZED_FASTFLAGVARIABLE = (v, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.SFFlag[v] = exports.SFFlag[v] || defaulton;
};
exports.SYNCHRONIZED_FASTFLAGVARIABLE = SYNCHRONIZED_FASTFLAGVARIABLE;
const FASTINT = (v) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.FInt[v] === undefined)
        exports.FInt[v] = 0;
};
exports.FASTINT = FASTINT;
const FASTINTVARIABLE = (v, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.FInt[v] = exports.FInt[v] || defaulton;
};
exports.FASTINTVARIABLE = FASTINTVARIABLE;
const DYNAMIC_FASTINT = (v) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.cache.DFInt[v] === undefined)
        exports.cache.DFInt[v] = 0;
};
exports.DYNAMIC_FASTINT = DYNAMIC_FASTINT;
const DYNAMIC_FASTINTVARIABLE = (v, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.cache.DFInt[v] = exports.cache.DFInt[v] || defaulton;
};
exports.DYNAMIC_FASTINTVARIABLE = DYNAMIC_FASTINTVARIABLE;
const SYNCHRONIZED_FASTINT = (v) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.SFInt[v] === undefined)
        exports.SFInt[v] = 0;
};
exports.SYNCHRONIZED_FASTINT = SYNCHRONIZED_FASTINT;
const SYNCHRONIZED_FASTINTVARIABLE = (v, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.SFInt[v] = exports.SFInt[v] || defaulton;
};
exports.SYNCHRONIZED_FASTINTVARIABLE = SYNCHRONIZED_FASTINTVARIABLE;
const FASTSTRING = (v) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.FString[v] === undefined)
        exports.FString[v] = '';
};
exports.FASTSTRING = FASTSTRING;
const FASTSTRINGVARIABLE = (v, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.FString[v] = exports.FString[v] || defaulton;
};
exports.FASTSTRINGVARIABLE = FASTSTRINGVARIABLE;
const DYNAMIC_FASTSTRING = (v) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.cache.DFString[v] === undefined)
        exports.cache.DFString[v] = '';
};
exports.DYNAMIC_FASTSTRING = DYNAMIC_FASTSTRING;
const DYNAMIC_FASTSTRINGVARIABLE = (v, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.cache.DFString[v] = exports.cache.DFString[v] || defaulton;
};
exports.DYNAMIC_FASTSTRINGVARIABLE = DYNAMIC_FASTSTRINGVARIABLE;
const SYNCHRONIZED_FASTSTRING = (v) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    if (exports.SFString[v] === undefined)
        exports.SFString[v] = '';
};
exports.SYNCHRONIZED_FASTSTRING = SYNCHRONIZED_FASTSTRING;
const SYNCHRONIZED_FASTSTRINGVARIABLE = (v, defaulton) => {
    if (!exports.d.setup) {
        setUpFLog();
    }
    exports.SFString[v] = exports.SFString[v] || defaulton;
};
exports.SYNCHRONIZED_FASTSTRINGVARIABLE = SYNCHRONIZED_FASTSTRINGVARIABLE;
