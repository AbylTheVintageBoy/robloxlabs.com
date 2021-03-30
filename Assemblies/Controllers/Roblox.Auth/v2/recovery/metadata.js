"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            isOnPhone: false,
            codeLength: 6,
            isPhoneFeatureEnabledForUsername: true,
            isPhoneFeatureEnabledForPassword: true,
            isBedev2CaptchaEnabledForPasswordReset: true,
        });
    },
};
