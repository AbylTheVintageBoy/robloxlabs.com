"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            codeLength: 6,
            loadingImageUrl: 'https://images.rbxcdn.com/4bed93c91f909002b1f17f05c0ce13d1.gif',
            supportUrl: 'https://www.sitetest4.robloxlabs.com/info/2sv',
        });
    },
};
