"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROBLOX_Starter = void 0;
const spdy_1 = __importDefault(require("spdy"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const Roblox_Util_FastLog_1 = require("../Roblox.Util/Roblox.Util.FastLog");
const Directories_1 = require("../../Constants/Directories");
const Urls_1 = __importDefault(require("../../Constants/Urls"));
dotenv_1.default.config({ path: Directories_1._dirname + '\\.env' });
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
const ROBLOX_Starter = (app, name) => {
    try {
        const httpsServer = spdy_1.default
            .createServer({
            cert: fs_1.default.readFileSync(Directories_1._sslname + '\\ST4.crt', 'utf-8'),
            key: fs_1.default.readFileSync(Directories_1._sslname + '\\ST4.key', 'utf-8'),
            passphrase: process.env['ST4_pw'],
        }, app)
            .listen(443, name, () => Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[name], `[SFLog::%s] https://%s:443 Started`, name, name));
        const httpServer = app.listen(80, name, () => Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.SFLog[name], `[SFLog::%s] http://%s:80 Started`, name, name));
        return [httpServer, httpsServer];
    }
    catch (err) {
        throw new Error(err);
    }
};
exports.ROBLOX_Starter = ROBLOX_Starter;
