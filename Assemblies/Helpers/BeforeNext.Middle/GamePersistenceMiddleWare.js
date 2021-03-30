"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePersistenceMiddleware = void 0;
const ValidateDoesTheWorldGetToViewTheSite_1 = require("../../Util/ValidateDoesTheWorldGetToViewTheSite");
const Roblox_Util_FastLog_1 = require("../WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.LOGGROUP('GumePersistince');
exports.GamePersistenceMiddleware = ((req, res, next) => {
    let cookie = req.headers.cookie;
    if (cookie === undefined)
        cookie = '';
    cookie = cookie.split(';').find((secToken) => {
        return secToken.startsWith(' RobloxSecurityToken') || secToken.startsWith('RobloxSecurityToken');
    });
    if (cookie)
        cookie = cookie.split('=')[1];
    if (!ValidateDoesTheWorldGetToViewTheSite_1.ValidateDoesTheWorldGetToViewTheSite(req.method, encodeURIComponent(`${req.protocol}://${req.hostname}${req.url}`), cookie || req.headers['roblox-security-token'], res, true))
        return res.status(503).send({ errors: [{ code: 0, message: 'Service Undergoing Maintenance' }] });
    Roblox_Util_FastLog_1.FASTLOG5(Roblox_Util_FastLog_1.FLog['GumePersistince'], `[FLog::GumePersistince] %s REQUEST ON %s://%s%s FROM %s`, req.method.toUpperCase(), req.protocol, req.hostname, req.url, req.headers['user-agent'].toUpperCase());
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
