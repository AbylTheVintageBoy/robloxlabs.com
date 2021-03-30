"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRootPlaceFromUniverseId = void 0;
const Directories_1 = require("../../Constants/Directories");
const fs_1 = __importDefault(require("fs"));
const GetRootPlaceFromUniverseId = (universeId) => {
    const universePath = Directories_1._dirname + '\\Manifest\\universes\\' + universeId;
    if (!fs_1.default.statSync(universePath).isDirectory()) {
        return [false, null];
    }
    const universe = JSON.parse(fs_1.default.readFileSync(universePath + '\\UNIVERSE.json', 'utf-8'));
    if (universe instanceof Object && universe['rootPlaceId'] !== undefined) {
        const placePath = Directories_1._dirname + '\\Manifest\\places\\' + universe['rootPlaceId'];
        if (!fs_1.default.statSync(placePath).isDirectory()) {
            return [false, null];
        }
        const place = JSON.parse(fs_1.default.readFileSync(placePath + '\\PLACE.json', 'utf-8'));
        return [true, place];
    }
    return [false, null];
};
exports.GetRootPlaceFromUniverseId = GetRootPlaceFromUniverseId;
