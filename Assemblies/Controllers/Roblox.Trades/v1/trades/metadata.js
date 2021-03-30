"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        res.send({
            maxItemsPerSide: 4,
            minValueRatio: 0,
            tradeSystemMaxRobuxPercent: 0.5,
            tradeSystemRobuxFee: 0.3,
        });
    },
};
