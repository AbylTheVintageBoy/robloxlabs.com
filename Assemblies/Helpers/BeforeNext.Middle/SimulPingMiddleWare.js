"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulPingMiddleware = void 0;
const Roblox_Util_FastLog_1 = require("../WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.LOGGROUP('SIMPLEPING');
exports.SimulPingMiddleware = ((req, res, next) => {
    Roblox_Util_FastLog_1.FASTLOG5(Roblox_Util_FastLog_1.FLog['SIMPLEPING'], `[FLog::SIMPLEPING] %s REQUEST ON %s://%s%s FROM %s`, req.method.toUpperCase(), req.protocol, req.hostname, req.url, req.headers['user-agent'].toUpperCase());
    if ((req.path === '/recipe' || req.path === '/report') && req.hostname === 'lms.simulpong.com') {
        res.header('Access-Control-Allow-Headers', 'Origin, Referer, X-Requested-With, Content-Type, X-CSRF-TOKEN, Pragma, Cache-Control, expires');
        res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Origin', req.headers['origin'] || 'https://www.sitetest4.robloxlabs.com');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
    if (!req.headers.cookie && req.hostname === 'rcity.simulpong.com' && req.path.toLocaleLowerCase() === '/') {
        return res.redirect('https://rcity.simulpong.com/Login/');
    }
    if (req.headers.cookie &&
        !req.headers.cookie.includes('TEAM-CITY-AUTH') &&
        req.hostname === 'rcity.simulpong.com' &&
        req.path.toLocaleLowerCase() === '/') {
        return res.redirect('https://rcity.simulpong.com/Login?ReturnUrl=' + encodeURI(req.path));
    }
    if (req.headers.cookie &&
        req.headers.cookie.includes('TEAM-CITY-AUTH') &&
        req.hostname === 'rcity.simulpong.com' &&
        (req.path.toLowerCase() === '/login' || req.path.toLowerCase() === '/login/')) {
        return res.redirect('https://rcity.simulpong.com');
    }
    next();
});
