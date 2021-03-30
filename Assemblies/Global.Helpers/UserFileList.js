"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serve_index_1 = __importDefault(require("serve-index"));
const Directories_1 = require("../Helpers/Constants/Directories");
const fs_1 = __importDefault(require("fs"));
const Roblox_Util_FastLog_1 = require("../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.LOGGROUP('Pages');
const UseFileList = (app, opts) => {
    return new Promise((r) => {
        const path = (opts !== undefined ? opts.path : Directories_1._dirname + '\\StaticPages') || Directories_1._dirname + '\\StaticPages';
        if (!fs_1.default.existsSync(path)) {
            Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.FLog['Pages'], `[FLog::Pages] The directory %s was not found, make sure you configured your listing directory correctly. Static pages, so this will that return ctx::resumeFunc()`, path);
            console.error('The directory %s was not found, make sure you configured your listing directory correctly. Static pages, so this will that return ctx::resumeFunc()');
        }
        app.use('/', serve_index_1.default(path + '\\listings', { icons: true }));
        r();
    });
};
exports.default = UseFileList;
