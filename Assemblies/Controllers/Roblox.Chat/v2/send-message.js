"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Notifications_1 = __importDefault(require("../../../Helpers/WebHelpers/Events/Notifications"));
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        if (_req.method === 'OPTIONS')
            return res.send();
        axios_1.default.get('https://assetgame.roblox.com/Game/GetCurrentUser.ashx', {
            headers: { Cookie: _req.headers.cookie },
        })
            .then((re2) => {
            console.log(re2.data);
            axios_1.default.get('https://chat.roblox.com/v2/get-conversations?conversationIds=' + _req.body.conversationId, {
                headers: { Cookie: _req.headers.cookie },
            })
                .then((re) => {
                console.log(re.data);
                const ids = [];
                re.data[0].participants.forEach((element) => {
                    console.log(element.targetId.toString() !== re2.data, element.targetId !== parseInt(re2.data));
                    if (element.targetId !== parseInt(re2.data))
                        ids.push(element.targetId);
                });
                console.log(ids);
                Notifications_1.default.push(_req.headers.cookie, _req.body.conversationId, ids);
            })
                .catch((e) => {
                Notifications_1.default.push(_req.headers.cookie, null, null);
            });
        })
            .catch((e) => {
            Notifications_1.default.push(_req.headers.cookie, null, null);
        });
        axios_1.default.post('https://chat.roblox.com' + _req.url, _req.body, {
            headers: { ..._req.headers, host: 'chat.roblox.com' },
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
