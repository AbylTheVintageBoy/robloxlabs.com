"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kestrel = void 0;
const Roblox_Util_FastLog_1 = require("../WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.LOGVARIABLE('Kestrul', 6);
exports.Kestrel = ((req, res, next) => {
    Roblox_Util_FastLog_1.FASTLOG5(Roblox_Util_FastLog_1.FLog['Kestrul'], `[FLog::Kestrul] %s REQUEST ON %s://%s%s FROM %s`, req.method.toUpperCase(), req.protocol, req.hostname, req.url, req.headers['user-agent'].toUpperCase());
    res.header({ server: 'Kestrel', 'X-DNS-Prefetch-Control': 'off' });
    if (req.headers['origin'] === 'https://www.sitetest4.robloxlabs.com' || req.xhr) {
        res.header('Access-Control-Allow-Headers', 'Origin, Referer, X-Requested-With, Content-Type, X-CSRF-TOKEN, Pragma, Cache-Control, expires');
        res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Origin', req.headers['origin'] || 'https://www.sitetest4.robloxlabs.com');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
    next();
});
