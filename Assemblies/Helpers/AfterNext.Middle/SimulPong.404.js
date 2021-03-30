"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../../Api");
const fs_1 = __importDefault(require("fs"));
exports.default = (req, res) => {
    let template = fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\ErrorViews\\SimulPong\\SimulPong.404.html', { encoding: 'utf-8' });
    template = template.split('<REQUESTURLGOESHERE>').join(req.url);
    return res.send(template);
};
