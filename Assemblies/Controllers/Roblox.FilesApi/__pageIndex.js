"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        res.send({ name: 'Roblox.Files.Service', status: 'OK' });
    },
};
