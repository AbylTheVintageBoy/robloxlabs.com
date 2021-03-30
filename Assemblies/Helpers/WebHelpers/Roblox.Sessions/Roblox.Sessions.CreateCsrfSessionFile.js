"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCsrfSessionFile = void 0;
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const Roblox_Util_ClientSettings_1 = require("../Roblox.Util/Roblox.Util.ClientSettings");
const FInt = Roblox_Util_ClientSettings_1.ClientSettings.GetSettings(Roblox_Util_ClientSettings_1.Group.FInt, 'Web');
const CreateCsrfSessionFile = (id) => {
    const sessionFile = `${id}.json`;
    const t = crypto_1.default.createHash('md5').update(crypto_1.default.randomBytes(1000)).digest('base64');
    fs_1.default.writeFileSync(Directories_1._dirname + '\\Manifest\\csrf\\' + sessionFile, JSON.stringify({ sub: id, token: t, c: 0 }, undefined, 4), {
        encoding: 'ascii',
    });
    let count = 0;
    const r = setInterval(() => {
        count++;
        if (!fs_1.default.existsSync(Directories_1._dirname + '\\Manifest\\csrf\\' + sessionFile))
            return r.unref();
        if (count === FInt['CSRFV2MaxRefreshCount'])
            return r.unref();
        try {
            fs_1.default.writeFileSync(Directories_1._dirname + '\\Manifest\\csrf\\' + sessionFile, JSON.stringify({ sub: id, token: crypto_1.default.createHash('md5').update(crypto_1.default.randomBytes(1000)).digest('base64'), c: count }, undefined, 4), {
                encoding: 'ascii',
            });
        }
        catch { }
    }, FInt['CSRFV2Timeout']);
    return t;
};
exports.CreateCsrfSessionFile = CreateCsrfSessionFile;
