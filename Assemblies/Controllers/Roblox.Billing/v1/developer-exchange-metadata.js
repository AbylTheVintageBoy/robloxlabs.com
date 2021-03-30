"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            redirectUrl: null,
            meetsMembershipRequirements: false,
            emailIsVerified: true,
            minRobuxToCashOut: '100,000',
            canProceedToCashout: false,
            hasCurrencyOperationError: false,
            currencyOperationErrorMessage: null,
            robloxDevExHelpFullUrl: 'https://en.help.roblox.com/hc/en-us/articles/203314100',
        });
    },
};
