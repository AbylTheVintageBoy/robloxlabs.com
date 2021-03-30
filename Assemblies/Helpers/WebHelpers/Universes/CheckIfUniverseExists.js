"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIfUniverseExists = void 0;
const Directories_1 = require("../../Constants/Directories");
const fs_1 = __importDefault(require("fs"));
const CheckIfUniverseExists = (universeId) => {
    const universePath = Directories_1._dirname + '\\Roblox.Moblox.Manifest\\universes\\' + universeId;
    if (!fs_1.default.existsSync(universePath)) {
        return false;
    }
    return true;
};
exports.CheckIfUniverseExists = CheckIfUniverseExists;
