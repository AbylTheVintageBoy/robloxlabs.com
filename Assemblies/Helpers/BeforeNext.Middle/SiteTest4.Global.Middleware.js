"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalMiddleware = void 0;
const crypto_1 = __importDefault(require("crypto"));
const Default_OutBound_Headers_1 = __importDefault(require("../Constants/Default.OutBound.Headers"));
const Roblox_Util_FastLog_1 = require("../WebHelpers/Roblox.Util/Roblox.Util.FastLog");
const ValidateDoesTheWorldGetToViewTheSite_1 = require("../../Util/ValidateDoesTheWorldGetToViewTheSite");
const StripTheTrailingSlash_1 = require("../../Util/StripTheTrailingSlash");
Roblox_Util_FastLog_1.LOGGROUP('Protocol77');
Roblox_Util_FastLog_1.DYNAMIC_LOGGROUP('Tasks');
exports.GlobalMiddleware = ((req, res, next) => {
    if (req.path.toLowerCase() !== '/login/maintenance/' &&
        req.hostname !== 'apis.sitetest4.robloxlabs.com' &&
        req.hostname !== 'ecsv2.sitetest4.robloxlabs.com' &&
        req.hostname !== 'metrics.sitetest4.robloxlabs.com') {
        let cookie = req.headers.cookie;
        if (cookie === undefined)
            cookie = '';
        cookie = cookie.split(';').find((secToken) => {
            return secToken.startsWith(' RobloxSecurityToken') || secToken.startsWith('RobloxSecurityToken');
        });
        if (cookie)
            cookie = cookie.split('=')[1];
        if (!ValidateDoesTheWorldGetToViewTheSite_1.ValidateDoesTheWorldGetToViewTheSite(req.method, encodeURIComponent(`${req.protocol}://${req.hostname}${req.url}`), cookie || req.headers['roblox-security-token'], res))
            return;
    }
    if (req.headers['user-agent'] !== null) {
        Roblox_Util_FastLog_1.FASTLOG5(Roblox_Util_FastLog_1.FLog['Protocol77'], `[FLog::Protocol77] %s REQUEST ON %s://%s%s FROM %s`, req.method.toUpperCase(), req.protocol, req.hostname, req.url, req.headers['user-agent']);
    }
    res.header(Default_OutBound_Headers_1.default);
    if (!req.headers.cookie || (!req.headers.cookie.match(/__tid/) && req.hostname === 'www.sitetest4.robloxlabs.com'))
        res.cookie('__tid', crypto_1.default.createHash('sha256').update(crypto_1.default.randomBytes(1000)).digest('hex'), {
            maxAge: 3.154e14,
            domain: 'sitetest4.robloxlabs.com',
        });
    res.header('Access-Control-Allow-Headers', 'Origin, Referer, X-Requested-With, Content-Type, X-CSRF-TOKEN, Pragma, Cache-Control, expires');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    try {
        res.setHeader('Access-Control-Allow-Origin', req.headers['origin'] || 'https://www.sitetest4.robloxlabs.com');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
    catch (e) {
        Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.DFLog('Tasks'), `[DFLog::Tasks] Message: %s, Stack: %s`, e.message, e.stack);
    }
    if (req.method !== 'GET') {
        try {
        }
        catch (e) {
            Roblox_Util_FastLog_1.FASTLOG2(Roblox_Util_FastLog_1.DFLog('Tasks'), `[DFLog::Tasks] Message: %s, Stack: %s`, e.message, e.stack);
        }
    }
    if (req.headers['user-agent'] &&
        req.headers['user-agent'].includes('robloxlabsStudio') &&
        req.hostname === 'www.sitetest4.robloxlabs.com' &&
        req.path.toLowerCase() === '/') {
        return res.redirect('http://www.sitetest4.robloxlabs.com/roblox.html');
    }
    if (req.hostname === 'www.sitetest4.robloxlabs.com' &&
        StripTheTrailingSlash_1.StripTheTrailingSlash(req.path.toLowerCase()) === '/login/maintenance' &&
        ValidateDoesTheWorldGetToViewTheSite_1.ValidateDoesTheWorldGetToViewTheSite(req.method, encodeURIComponent(`${req.protocol}://${req.hostname}${req.url}`), req.headers['roblox-security-token'], res, true)) {
        return res.redirect('https://www.sitetest4.robloxlabs.com/');
    }
    if (req.headers.cookie &&
        !req.headers.cookie.includes('.ROBLOSECURITY') &&
        !req.headers.cookie.includes('AuthToken') &&
        (req.hostname === 'www.sitetest4.robloxlabs.com' || req.hostname === 'sitetest4.robloxlabs.com') &&
        req.path.toLocaleLowerCase() !== '/login/' &&
        req.path.toLocaleLowerCase() !== '/login' &&
        StripTheTrailingSlash_1.StripTheTrailingSlash(req.path).toLocaleLowerCase() !== '/login/maintenance' &&
        StripTheTrailingSlash_1.StripTheTrailingSlash(req.path).toLocaleLowerCase() !== '/login/twostepverification' &&
        req.path !== '/' &&
        req.path !== '/roblox.html' &&
        StripTheTrailingSlash_1.StripTheTrailingSlash(req.path).toLocaleLowerCase() !== '/authentication/login.ashx') {
        return res.redirect('https://www.sitetest4.robloxlabs.com/Login/');
    }
    if (req.headers.cookie &&
        req.headers.cookie.includes('.ROBLOSECURITY') &&
        req.hostname === 'www.sitetest4.robloxlabs.com' &&
        (req.path.toLowerCase() === '/login' || req.path.toLowerCase() === '/login/' || req.path === '/')) {
        return res.redirect('https://www.sitetest4.robloxlabs.com/home');
    }
    next();
});
