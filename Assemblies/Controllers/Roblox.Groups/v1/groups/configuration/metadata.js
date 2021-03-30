"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            groupConfiguration: {
                nameMaxLength: 50,
                descriptionMaxLength: 1000,
                iconMaxFileSizeMb: 20,
                cost: 100,
            },
            recurringPayoutsConfiguration: {
                maxPayoutPartners: 20,
            },
            roleConfiguration: {
                nameMaxLength: 100,
                descriptionMaxLength: 1000,
                limit: 40,
                cost: 25,
                minRank: 0,
                maxRank: 255,
            },
            isPremiumPayoutsEnabled: true,
            isDefaultEmblemPolicyEnabled: true,
        });
    },
};
