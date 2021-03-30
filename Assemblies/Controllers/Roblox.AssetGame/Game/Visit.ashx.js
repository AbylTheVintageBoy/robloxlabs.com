"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const Api_1 = require("../../../Api");
const fs_1 = __importDefault(require("fs"));
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        const str = fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\InternalCDN\\visit.lua', 'utf-8');
        const sign = crypto_1.default.createSign('sha1');
        const dick = '\r\n' + str;
        sign.write(dick);
        sign.end();
        const key = fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\InternalCDN\\PrivateKey.pem');
        const sig = sign.sign(key, 'base64');
        const out = `--rbxsig%${sig}%${dick}`;
        res.send(out);
    },
};
