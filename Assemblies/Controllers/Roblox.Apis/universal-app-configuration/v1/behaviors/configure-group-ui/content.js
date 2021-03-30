"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            displayUploadGroupIcon: true,
            displayJoinRequirementsSetting: true,
            displayGroupPrivacySettings: true,
            displayPlayerUsername: true,
        });
    },
};
