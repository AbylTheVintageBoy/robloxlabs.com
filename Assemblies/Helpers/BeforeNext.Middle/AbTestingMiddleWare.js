"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbTestingMiddleWare = void 0;
const Roblox_Util_FastLog_1 = require("../WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.LOGGROUP('AandBTusting');
exports.AbTestingMiddleWare = ((req, res, next) => {
    Roblox_Util_FastLog_1.FASTLOG5(Roblox_Util_FastLog_1.FLog['AandBTusting'], `[FLog::AandBTusting] %s REQUEST ON %s://%s%s FROM %s`, req.method.toUpperCase(), req.protocol, req.hostname, req.url, req.headers['user-agent'].toUpperCase());
    res.header({
        expires: -1,
        p3p: ' CP="CAO DSP COR CURa ADMa DEVa OUR IND PHY ONL UNI COM NAV INT DEM PRE"',
        pragma: ' no-cache',
        'roblox-machine-id': 'RB-WEB221',
        'x-frame-options': 'SAMEORIGIN',
    });
    if (req.method !== 'GET') {
        res.header('Access-Control-Allow-Headers', 'Origin, Referer, X-Requested-With, Content-Type, X-CSRF-TOKEN, Pragma, Cache-Control, expires');
        res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Origin', req.headers['origin'] || 'https://www.sitetest4.robloxlabs.com');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
    next();
});
