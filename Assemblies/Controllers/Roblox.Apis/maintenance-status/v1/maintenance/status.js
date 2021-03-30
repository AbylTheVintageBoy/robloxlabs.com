"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        res.send({ countDownTime: '1970-01-01T00:00:00', canAccessSite: false });
    },
};
