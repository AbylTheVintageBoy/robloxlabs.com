"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        return res.redirect('http://www.sitetest4.robloxlabs.com' + _req.url);
    },
};
