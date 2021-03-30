"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCaptchaSession = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const DeleteCaptchaSession = (sessionId) => {
    try {
        fs_1.default.unlinkSync(Directories_1._dirname + `\\Manifest\\sessions\\${sessionId}.json`);
    }
    catch {
        console.warn('Session most likely destroyed');
    }
};
exports.DeleteCaptchaSession = DeleteCaptchaSession;
