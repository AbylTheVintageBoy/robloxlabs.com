"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            groupLimit: 100,
            currentGroupCount: 4,
            groupStatusMaxLength: 255,
            groupPostMaxLength: 500,
            isGroupWallNotificationsEnabled: false,
            groupWallNotificationsSubscribeIntervalInMilliseconds: 60000,
            areProfileGroupsHidden: false,
            isGroupDetailsPolicyEnabled: true,
        });
    },
};
