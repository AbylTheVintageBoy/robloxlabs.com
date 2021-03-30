"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (req, res) => {
        res.status(200).send({
            ChatFilter: 'whitelist',
        });
    },
};
