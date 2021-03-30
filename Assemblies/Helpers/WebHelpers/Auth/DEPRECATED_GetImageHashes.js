"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetImageHashes = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const GetImageHashes = () => {
    return JSON.parse(fs_1.default.readFileSync(Directories_1._dirname + '\\Default\\Roblox.Captcha.Images.json', { encoding: 'utf-8' }));
};
exports.GetImageHashes = GetImageHashes;
