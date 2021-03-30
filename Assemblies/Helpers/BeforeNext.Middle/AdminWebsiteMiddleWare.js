"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminWebsiteMiddleWare = void 0;
const Roblox_Util_FastLog_1 = require("../WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.LOGGROUP('TheAdminsPog');
exports.AdminWebsiteMiddleWare = ((req, res, next) => {
    Roblox_Util_FastLog_1.FASTLOG5(Roblox_Util_FastLog_1.FLog['TheAdminsPog'], `[FLog::TheAdminsPog] %s REQUEST ON %s://%s%s FROM %s`, req.method.toUpperCase(), req.protocol, req.hostname, req.url, req.headers['user-agent'].toUpperCase());
    res.header({
        expires: -1,
        p3p: ' CP="CAO DSP COR CURa ADMa DEVa OUR IND PHY ONL UNI COM NAV INT DEM PRE"',
        pragma: ' no-cache',
        'roblox-machine-id': 'CHI1-WEB7761',
        'x-frame-options': 'SAMEORIGIN',
        'x-powered-by': 'ASP.NET',
        'cache-control': 'no-cache',
    });
    next();
});
