"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            metadata: {
                notificationId: '00000000-0000-0000-0000-000000000000',
                type: 'string',
                detail: {},
                fallbackDelivered: true,
            },
            statusMessage: 'string',
        });
    },
};
