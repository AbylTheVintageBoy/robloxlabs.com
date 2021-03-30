"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        res.send({
            isItemTagsFeatureEnabled: true,
            enabledAssetTypes: [
                'Hat',
                'HairAccessory',
                'FaceAccessory',
                'NeckAccessory',
                'ShoulderAccessory',
                'BackAccessory',
                'FrontAccessory',
                'WaistAccessory',
            ],
            maximumItemTagsPerItem: 5,
        });
    },
};
