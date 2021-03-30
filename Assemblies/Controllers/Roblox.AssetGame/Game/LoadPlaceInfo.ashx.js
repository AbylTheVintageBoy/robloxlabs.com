"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const Api_1 = require("../../../Api");
exports.default = {
    method: 'all',
    func: (_req, res) => {
        const txt = fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\InternalCDN\\PlaceInfo.lua', 'utf-8');
        const sign = crypto_1.default.createSign('sha1');
        const dick = '\r\n' + txt;
        sign.write(dick);
        sign.end();
        const key = fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\InternalCDN\\PrivateKey.pem');
        const sig = sign.sign(key, 'base64');
        const out = `--rbxsig%${sig}%${dick}`;
        res.send(out);
    },
};
