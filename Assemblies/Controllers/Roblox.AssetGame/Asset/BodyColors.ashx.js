"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Api_1 = require("../../../Api");
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        const str = fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\InternalCDN\\BodyColors.xml', 'utf-8');
        return res.send(str);
    },
};
