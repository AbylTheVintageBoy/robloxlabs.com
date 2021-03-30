"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res) => {
    return res
        .status(req.method === 'OPTIONS' ? 200 : 404)
        .send({ errors: [{ code: 0, message: 'Something went wrong with the request, see response status code.' }] });
};
