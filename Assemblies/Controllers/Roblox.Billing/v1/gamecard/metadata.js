"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            IsNewInCommEndpointEnabled: true,
            IsNewGiftCardEndpointEnabled: true,
            IsConvertCreditFlowEnabled: true,
            PinPlaceholder: null,
            GiftCardCodeLength: 12,
            GameCardCodeLength: 10,
            IsEventStreamEnabled: true,
        });
    },
};
