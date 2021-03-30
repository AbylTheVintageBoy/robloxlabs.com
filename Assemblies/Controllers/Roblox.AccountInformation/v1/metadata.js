"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            isAllowedNotificationsEndpointDisabled: true,
            isAccountSettingsPolicyEnabled: true,
            isPhoneNumberEnabled: false,
            MaxUserDescriptionLength: 1000,
            isUserDescriptionEnabled: false,
            isUserBlockEndpointsUpdated: false,
        });
    },
};
