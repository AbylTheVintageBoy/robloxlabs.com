"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = {
    method: 'all',
    func: (req, res) => {
        axios_1.default.get(`https://www.roblox.com/my/avatar`, { headers: { ...req.headers, host: 'www.roblox.com' } })
            .then((re) => {
            const newbody = re.data.split('roblox.com').join('sitetest4.robloxlabs.com');
            const newheaders = JSON.parse(JSON.stringify(re.headers).split('roblox.com').join('sitetest4.robloxlabs.com'));
            return res.header(newheaders).send(newbody);
        })
            .catch((e) => {
            const newheaders = JSON.parse(JSON.stringify(e.response.headers).split('roblox.com').join('sitetest4.robloxlabs.com'));
            return res.header(newheaders).status(e.response.status).send(e.response.data);
        });
    },
};
