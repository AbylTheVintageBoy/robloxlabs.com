"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        if (_req.method === 'OPTIONS')
            return res.send();
        axios_1.default.get('https://locale.roblox.com' + _req.url, {
            headers: { ..._req.headers, host: 'locale.roblox.com' },
        })
            .then((re) => {
            const newheaders = JSON.parse(JSON.stringify(re.headers).split('roblox.com').join('sitetest4.robloxlabs.com'));
            return res.header(newheaders).send(re.data);
        })
            .catch((e) => {
            const newheaders = JSON.parse(JSON.stringify(e.response.headers).split('roblox.com').join('sitetest4.robloxlabs.com'));
            return res.header(newheaders).status(e.response.status).send(e.response.data);
        });
    },
};
