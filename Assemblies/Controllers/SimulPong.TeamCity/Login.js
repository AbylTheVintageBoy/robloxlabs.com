"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'post',
    func: async (_req, res) => {
        console.log(_req.body);
        res.cookie('TEAM-CITY-AUTH', 'NIGGERS', {
            maxAge: 77316362131,
            domain: 'rcity.simulpong.com',
            secure: false,
            sameSite: 'lax',
            httpOnly: true,
        }).redirect(_req.body.ReturnUrl);
    },
};
