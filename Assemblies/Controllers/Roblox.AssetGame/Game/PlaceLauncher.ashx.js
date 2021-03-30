"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        const txt = {
            jobId: '00000000-0000-0000-0000-000000000000',
            status: 2,
            joinScriptUrl: 'https://assetgame.sitetest4.robloxlabs.com/Game/Join.ashx?placeId=1818',
            authenticationUrl: 'https://api.sitetest4.robloxlabs.com/Login/Negotiate.ashx',
            authenticationTicket: 'Guest:-3074',
        };
        res.send(txt);
    },
};
