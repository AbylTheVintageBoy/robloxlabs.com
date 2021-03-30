"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.redirect('http://assetgame.sitetest4.robloxlabs.com' + _req.url);
    },
};
