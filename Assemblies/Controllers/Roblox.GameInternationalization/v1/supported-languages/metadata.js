"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        res.send({
            isFeatureEnabled: true,
            areAllLanguagesEnabled: true,
            minimumUniverseIdForFeature: 1,
            isHumanTranslationProgressUIEnabled: false,
            isAutomaticTranslationProgressUIEnabled: false,
            isSupportedLanguagesChildLocalesUIEnabled: true,
        });
    },
};
