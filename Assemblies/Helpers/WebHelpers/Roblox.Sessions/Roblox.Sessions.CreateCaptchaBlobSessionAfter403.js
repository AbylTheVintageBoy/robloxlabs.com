"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCaptchaBlobSessionAfter403 = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const Roblox_Util_ClientSettings_1 = require("../Roblox.Util/Roblox.Util.ClientSettings");
const FInt = Roblox_Util_ClientSettings_1.ClientSettings.GetSettings(Roblox_Util_ClientSettings_1.Group.FInt);
const CreateCaptchaBlobSessionAfter403 = (response, captchaBLOB, ip) => {
    const dataToRefer = { sub: ip, iat: Math.floor(new Date(Date.now()).getTime() / 1000) };
    fs_1.default.writeFileSync(Directories_1._dirname + `\\Manifest\\sessions\\${captchaBLOB}.json`, JSON.stringify(dataToRefer), {
        encoding: 'ascii',
    });
    setTimeout(() => {
        try {
            fs_1.default.unlinkSync(Directories_1._dirname + `\\Manifest\\sessions\\${captchaBLOB}.json`);
        }
        catch {
            console.warn('The session is already clear');
        }
    }, FInt['CaptchaV2Timeout']);
    response.statusMessage = 'Captcha failed';
    response.status(403).header({ expires: FInt['CaptchaV2Timeout'] }).send({
        success: false,
        message: 'You need to pass the robot test first.',
        blob: captchaBLOB,
        expires: FInt['CaptchaV2Timeout'],
    });
    return;
};
exports.CreateCaptchaBlobSessionAfter403 = CreateCaptchaBlobSessionAfter403;
