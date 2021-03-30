"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send([
            { title: 'AccountInfo', url: 'https://www.sitetest4.robloxlabs.com/my/account#!/info', suffix: 'info' },
            { title: 'Security', url: 'https://www.sitetest4.robloxlabs.com/my/account#!/security', suffix: 'security' },
            { title: 'Privacy', url: 'https://www.sitetest4.robloxlabs.com/my/account#!/privacy', suffix: 'privacy' },
            { title: 'Billing', url: 'https://www.sitetest4.robloxlabs.com/my/account#!/billing', suffix: 'billing' },
            { title: 'Notifications', url: 'https://www.sitetest4.robloxlabs.com/my/account#!/notifications', suffix: 'notifications' },
        ]);
    },
};
