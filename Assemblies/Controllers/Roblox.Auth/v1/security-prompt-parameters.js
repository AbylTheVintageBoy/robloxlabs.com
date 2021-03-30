"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        return res.send({ clearLocalPreferences: false, promptType: null, viewType: null, dismissOption: null });
    },
};
