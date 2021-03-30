"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ws_1 = __importDefault(require("ws"));
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../Helpers/Constants/Directories");
const Roblox_Util_FastLog_1 = require("../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
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
module.exports = (httpserver, httpsServer, opts) => {
    return new Promise((resolve, reject) => {
        let Sockets;
        const maps = [];
        try {
            Sockets = fs_1.default.readdirSync((opts !== undefined ? opts.path : Directories_1._dirname + '\\sockets') || Directories_1._dirname + '\\sockets');
        }
        catch (err) {
            return Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], '[SFLog::%s] %s', opts.apiName, err.message);
        }
        Roblox_Util_FastLog_1.FASTLOG3(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] https://%s has %d websocket(s)`, opts.apiName, opts.apiName, Sockets.length);
        Sockets.forEach((v) => {
            if (!v.includes('.js.map') || !v.includes('.d.ts')) {
                let map;
                try {
                    map = require(((opts !== undefined ? opts.path + '\\' : Directories_1._dirname + '\\sockets\\') || Directories_1._dirname + '\\sockets\\') + v);
                }
                catch (err) {
                    return console.error(err);
                }
                if (map.default) {
                    if (!map.default.dir)
                        return;
                    if (!map.default.func)
                        return;
                    Roblox_Util_FastLog_1.FASTLOG3(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] MAPPING WEBSOCKET wss://%s%s`, opts.apiName, opts.apiName, map.default.dir);
                    maps.push(map.default);
                }
                else {
                    return reject(`${v} had no default export.`);
                }
            }
        });
        if (httpsServer) {
            const wssServer = new ws_1.default.Server({ server: httpsServer, port: 8000, host: opts.apiName });
            if (opts.logSetups)
                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] MAPPING UPGRADE https://%s:8000`, opts.apiName, opts.apiName);
            httpsServer.on('upgrade', (r, s, h) => {
                let isValid = false;
                maps.forEach((v) => {
                    if (r.url.split('?').shift() === v.dir) {
                        wssServer.handleUpgrade(r, s, h, (s2) => {
                            wssServer.emit('connection', s2, r);
                        });
                        isValid = true;
                    }
                });
                if (!isValid) {
                    s.write('https/3.0 404 Socket Not Found\r\n\r\n');
                    return s.destroy();
                }
            });
            if (opts.logSetups)
                Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] MAPPING CONNECT https://%s:8000`, opts.apiName, opts.apiName);
            wssServer.on('connection', (s, r) => {
                maps.forEach((v) => {
                    if (r.url.split('?').shift() === v.dir) {
                        return v.func(s, r);
                    }
                });
            });
        }
        const wsServer = new ws_1.default.Server({ server: httpserver, port: 5000, host: opts.apiName });
        if (opts.logSetups)
            Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] MAPPING UPGRADE http://%s:5000`, opts.apiName, opts.apiName);
        httpserver.on('upgrade', (r, s, h) => {
            let isValid = false;
            maps.forEach((v) => {
                if (r.url.split('?').shift() === v.dir) {
                    wsServer.handleUpgrade(r, s, h, (s2) => {
                        wsServer.emit('connection', s2, r);
                    });
                    isValid = true;
                }
            });
            if (!isValid) {
                s.write('https/3.0 404 Socket Not Found\r\n\r\n');
                return s.destroy();
            }
        });
        if (opts.logSetups)
            Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[opts.apiName], `[SFLog::%s] MAPPING CONNECT http://%s:5000`, opts.apiName, opts.apiName);
        wsServer.on('connection', (s, r) => {
            maps.forEach((v) => {
                if (r.url.split('?').shift() === v.dir) {
                    return v.func(s, r);
                }
            });
        });
        resolve();
    });
};
