"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            displayTwoStepVerification: true,
            displayEmailAddress: true,
            displayWeChat: false,
            displayQQ: false,
            displayConnectedAccounts: true,
            displayNotificationStream: true,
            displayDesktopPush: true,
            displayMobilePush: true,
            displayPhoneNumber: true,
            displaySocialMedia: true,
            displayDescription: true,
            displayAccountRestrictions: true,
            displayCountryList: true,
            displayWhoCanMessageMe: true,
            displayWhoCanFindMeByPhoneNumber: true,
            displayWhoCanInviteMeToVIPServers: true,
            displayWhoCanTradeWithMe: true,
            displayTradeQualityFilter: true,
            displayLanguageList: true,
            displayChangeUsername: true,
            displayChangePassword: true,
            displayBillingTab: true,
            displayPrivacyModeToolTip: true,
        });
    },
};
