"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUniverseFromPlaceId = void 0;
const Directories_1 = require("../../Constants/Directories");
const fs_1 = __importDefault(require("fs"));
const GetUniverseFromPlaceId = (placeId) => {
    const placePath = Directories_1._dirname + '\\Manifest\\places\\' + placeId;
    if (!fs_1.default.statSync(placePath).isDirectory()) {
        return [false, null];
    }
    const place = JSON.parse(fs_1.default.readFileSync(placePath + '\\PLACE.json', 'utf-8'));
    if (place instanceof Object && place['universeId'] !== undefined) {
        const universePath = Directories_1._dirname + '\\Manifest\\universes\\' + place['universeId'];
        if (!fs_1.default.statSync(universePath).isDirectory()) {
            return [false, null];
        }
        const universe = JSON.parse(fs_1.default.readFileSync(universePath + '\\UNIVERSE.json', 'utf-8'));
        return [true, universe];
    }
    return [false, null];
};
exports.GetUniverseFromPlaceId = GetUniverseFromPlaceId;
