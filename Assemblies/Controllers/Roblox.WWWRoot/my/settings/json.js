"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../../../../Api");
const fs_1 = __importDefault(require("fs"));
exports.default = {
    method: 'all',
    func: (_req, res) => {
        const template = fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\InternalCDN\\user.json', {
            encoding: 'utf-8',
        });
        return res.send(template);
    },
};
