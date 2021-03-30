"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IStartup = void 0;
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const DeveloperExceptionPage_1 = __importDefault(require("../Global.Helpers/DeveloperExceptionPage"));
const UseRouting_1 = __importDefault(require("../Global.Helpers/UseRouting"));
const MapControllers_1 = __importDefault(require("../Global.Helpers/MapControllers"));
const UsePages_1 = __importDefault(require("../Global.Helpers/UsePages"));
const Roblox_Util_FastLog_1 = require("../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
const signalrjs_1 = __importDefault(require("signalrjs"));
const UserFileList_1 = __importDefault(require("../Global.Helpers/UserFileList"));
Roblox_Util_FastLog_1.DYNAMIC_LOGGROUP('Tasks');
var IStartup;
(function (IStartup) {
    IStartup.Configure = async (opts) => {
        try {
            opts.app.disable('etag');
            opts.app.disable('case sensitive routing');
            opts.app.enable('trust proxy');
            opts.app.disable('x-powered-by');
            opts.app.disable('strict routing');
            opts.app.use(cookie_parser_1.default(), express_1.json(), body_parser_1.default.urlencoded({ extended: false }));
            if (opts.UsePages) {
                await UsePages_1.default(opts.app, opts.PagesOpts, opts.PageOpts);
            }
            if (opts.fileListings) {
                await UserFileList_1.default(opts.app, opts.PagesOpts);
            }
            if (opts.UseRouting) {
                await UseRouting_1.default(opts.app, opts.RoutingOpts);
            }
            if (opts.UseEndpoints) {
                await MapControllers_1.default(opts.app, opts.EndpointOpts);
            }
            if (opts.errorpage) {
                await DeveloperExceptionPage_1.default(opts.app);
            }
            if (opts.signalr) {
                const sir = signalrjs_1.default();
                opts.hubs.forEach((v) => {
                    sir.hub(v, () => 0);
                });
                opts.app.use(signalrjs_1.default.createListener());
            }
        }
        catch (e) {
            Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.DFLog('Tasks'), `[DFLog::Tasks] Message: %s, Stack: %s`, e.message, e.stack);
        }
    };
})(IStartup = exports.IStartup || (exports.IStartup = {}));
