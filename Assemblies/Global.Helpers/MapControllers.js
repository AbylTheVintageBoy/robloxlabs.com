"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Roblox_Util_FastLog_1 = require("../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
const Directories_1 = require("../Helpers/Constants/Directories");
const Roblox_FileWalker_1 = require("../Helpers/WebHelpers/Roblox.Util/Roblox.FileWalker");
const fs_1 = __importDefault(require("fs"));
const Urls_1 = __importDefault(require("../Helpers/Constants/Urls"));
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_WWW']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_API']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_STATIC_CDN']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_JS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_CSS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_IMAGES']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_SETUP_CDN']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_EPHEMERAL_COUNTERS_API']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['DEPRECATED_ROBLOX_TEMPORARY_IMAGES']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_VERSION_COMPATIBILITY_API']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_CLIENT_SETTINGS_API']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_ASSET_GAME']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_EPHEMERAL_COUNTERS_VERSION_2']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_GAME_PERSISTENCE']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_DOSARREST_ORIGIN_CORP']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_MARKETPLACE_API']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_METRICS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_AUTH']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_APIS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_LOCALE']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_AB_TESTING']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_AB_TESTING_API']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_USERS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_TWO_STEP_VERIFICATION']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['SIMULPONG_LATENCY_MEASUREMENTS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_CHAT']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_CONTACTS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_NOTIFICATIONS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_ACCOUNT_SETTINGS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_ADS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_TRADES']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_FRIENDS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_PRIVATE_MESSAGES']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_ECONOMY']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_GAMES']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_REAL_TIME']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_THUMB_NAILS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_PRESENCE']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_GROUPS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_ACCOUNT_INFORMATION']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_BADGES']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_DEVELOPER_FORUM']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_PREMIUM_FEATURES']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_CLIENT_SETTINGS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_CLIENT_SETTINGS_CDN']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_AD_CONFIGURATION']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_CLIENT_TELEMENTRY']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_ASSET_DELIVERY']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_AVATAR']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_BILLING']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_CATALOG']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_CDN_PROVIDERS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_CHAT_MODERATION']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_CONTENT_STORE']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_DEVELOP']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_DISCUSSIONS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_ECONOMY_CREATOR_STATS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_ENGAGEMENT_PAYOUTS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_FOLLOWINGS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_GAME_INTERNATIONALIZATION']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_GAME_JOIN']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_GROUPS_MODERATION']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_INVENTORY']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_ITEM_CONFIGURATION']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_LOCALIZATION_TABLES']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_POINTS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_PUBLISH']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_PUNISHMENTS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_SHARE']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_TEXT_FILTER']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_THEMES']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_THUMBNAILS_RESIZER']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_TRANSLATION_ROLES']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_TRANSLATIONS']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_USER_MODERATION']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_VOICE']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['ROBLOX_FILES_API']);
Roblox_Util_FastLog_1.SYNCHRONIZED_LOGGROUP(Urls_1.default['SIMULPONG_ROBLOX_TEAM_CITY']);
const MapControllers = (app, opts) => {
    return new Promise(async (resumeFunc) => {
        const directory = (opts !== undefined ? opts.path : Directories_1._dirname + '\\Controllers') || Directories_1._dirname + '\\Controllers';
        if (!fs_1.default.existsSync(directory)) {
            Roblox_Util_FastLog_1.FASTLOG3(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] The directory %s for the api %s was not found, make sure you configured your directory correctly.`, opts.apiName, directory, opts.apiName);
            return resumeFunc();
        }
        const r = Roblox_FileWalker_1.walk(directory);
        let count = 0;
        r.forEach((v) => {
            let name = v.replace(directory, '');
            if (name.match(/.+\.js/)) {
                name = name.replace('.js', '');
                name = name.split('_P-').join(':');
                name = name.split('\\').join('/');
                if (name === '/__pageIndex')
                    name = '/';
                let map;
                try {
                    map = require(v);
                }
                catch (err) {
                    return Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], '[SFLog::%s] %s', opts.apiName, err.message);
                }
                let func;
                let method;
                if (map.default) {
                    if (map.default.func)
                        func = map.default.func;
                    else
                        return;
                    if (map.default.method)
                        method = map.default.method.toLowerCase();
                    else
                        return;
                    count++;
                    try {
                        if (method === 'get') {
                            if (opts.logSetups)
                                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] Mapping GET %s`, opts.apiName, (opts.apiName ? 'https://' + opts.apiName : '') + name);
                            app.get(name, func);
                        }
                        else if (method === 'head') {
                            if (opts.logSetups)
                                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] Mapping HEAD %s`, opts.apiName, (opts.apiName ? 'https://' + opts.apiName : '') + name);
                            app.head(name, func);
                        }
                        else if (method === 'post') {
                            if (opts.logSetups)
                                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] Mapping POST %s`, opts.apiName, (opts.apiName ? 'https://' + opts.apiName : '') + name);
                            app.post(name, func);
                        }
                        else if (method === 'put') {
                            if (opts.logSetups)
                                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] Mapping PUT %s`, opts.apiName, (opts.apiName ? 'https://' + opts.apiName : '') + name);
                            app.put(name, func);
                        }
                        else if (method === 'delete') {
                            if (opts.logSetups)
                                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] Mapping DELETE %s`, opts.apiName, (opts.apiName ? 'https://' + opts.apiName : '') + name);
                            app.delete(name, func);
                        }
                        else if (method === 'connect') {
                            if (opts.logSetups)
                                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] Mapping CONNECT %s`, opts.apiName, (opts.apiName ? 'https://' + opts.apiName : '') + name);
                            app.connect(name, func);
                        }
                        else if (method === 'options') {
                            if (opts.logSetups)
                                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] Mapping OPTIONS %s`, opts.apiName, (opts.apiName ? 'https://' + opts.apiName : '') + name);
                            app.options(name, func);
                        }
                        else if (method === 'trace') {
                            if (opts.logSetups)
                                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] Mapping TRACE %s`, opts.apiName, (opts.apiName ? 'https://' + opts.apiName : '') + name);
                            app.trace(name, func);
                        }
                        else if (method === 'patch') {
                            if (opts.logSetups)
                                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] Mapping PATCH %s`, opts.apiName, (opts.apiName ? 'https://' + opts.apiName : '') + name);
                            app.patch(name, func);
                        }
                        else if (method === 'all') {
                            if (opts.logSetups)
                                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] Mapping ALL %s`, opts.apiName, (opts.apiName ? 'https://' + opts.apiName : '') + name);
                            app.all(name, func);
                        }
                        else {
                            return Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.SFLog[opts.apiName], '[SFLog::%s] Error requesting Controller.', opts.apiName);
                        }
                    }
                    catch (err) {
                        return Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], '[SFLog::%s] %s', opts.apiName, err.message);
                    }
                }
                else {
                    return Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.SFLog[opts.apiName], '[SFLog::%s] This Controller had no default export.', opts.apiName);
                }
            }
        });
        Roblox_Util_FastLog_1.FASTLOG3(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] https://%s has %d controller(s)`, opts.apiName, opts.apiName, count);
        resumeFunc();
    });
};
exports.default = MapControllers;
