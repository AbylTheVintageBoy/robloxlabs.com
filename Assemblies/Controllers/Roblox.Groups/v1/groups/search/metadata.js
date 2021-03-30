"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        res.send({
            SuggestedGroupKeywords: ['Game Studios', 'Military', 'Roleplaying', 'Fan'],
        });
    },
};
