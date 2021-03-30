"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            viewModel: {
                selectedProduct: {
                    ProductId: 480,
                    Name: 'Roblox Premium 450',
                    DurationTitle: 'Monthly',
                    Price: 4.99,
                    IsCurrentPremiumFeature: false,
                    PremiumFeatureId: 0,
                    Rank: 0,
                    IsDisabled: false,
                    Expiration: '2021-03-18T11:19:35.5407453-05:00',
                    IsRenewable: true,
                    RenewOrExpireText: 'Renews On: <span class="date-time-i18n" data-date-time-i18n-value="3/18/2021" data-date-time-i18n-format="short"></span>',
                    ImageFile: null,
                    PriceText: '$4.99',
                    GiftcardShoppingCartProductId: 0,
                },
                availableCredit: 0,
                totalDue: 4.99,
                balance: -4.99,
                isNewInCommEndpointEnabled: false,
                isNewGiftCardEndpointEnabled: false,
            },
            redirectionUrl: null,
        });
    },
};
