"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        res.send({
            isNearbyUpsellEnabled: false,
            isFriendsUserDataStoreCacheEnabled: true,
            userName: null,
            displayName: null,
        });
    },
};
