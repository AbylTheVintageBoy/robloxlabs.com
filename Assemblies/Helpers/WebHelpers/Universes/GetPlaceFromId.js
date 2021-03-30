"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlaceFromId = void 0;
const Directories_1 = require("../../Constants/Directories");
const fs_1 = __importDefault(require("fs"));
const GetPlaceFromId = (placeId) => {
    if (placeId === -1)
        placeId = 0;
    const placePath = Directories_1._dirname + '\\Manifest\\places\\' + placeId;
    if (!fs_1.default.existsSync(placePath))
        return [false, null];
    if (!fs_1.default.statSync(placePath).isDirectory())
        return [false, null];
    const place = JSON.parse(fs_1.default.readFileSync(placePath + '\\PLACE.json', 'utf-8'));
    return [true, place];
};
exports.GetPlaceFromId = GetPlaceFromId;
