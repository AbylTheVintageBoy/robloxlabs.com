"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRootPlaceIdFromUniverseId = void 0;
const Directories_1 = require("../../Constants/Directories");
const fs_1 = __importDefault(require("fs"));
const GetRootPlaceIdFromUniverseId = (universeId) => {
    const universePath = Directories_1._dirname + '\\Manifest\\universes\\' + universeId;
    if (!fs_1.default.existsSync(universePath) || !fs_1.default.statSync(universePath).isDirectory()) {
        return [false, null];
    }
    const universe = JSON.parse(fs_1.default.readFileSync(universePath + '\\UNIVERSE.json', 'utf-8'));
    if (universe instanceof Object && universe['rootPlaceId'] !== undefined) {
        return [true, universe['rootPlaceId']];
    }
    return [false, null];
};
exports.GetRootPlaceIdFromUniverseId = GetRootPlaceIdFromUniverseId;
