"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIfPlaceExists = void 0;
const Directories_1 = require("../../Constants/Directories");
const fs_1 = __importDefault(require("fs"));
const CheckIfPlaceExists = (placeId) => {
    const placePath = Directories_1._dirname + '\\Manifest\\places\\' + placeId;
    if (!fs_1.default.existsSync(placePath)) {
        return false;
    }
    return true;
};
exports.CheckIfPlaceExists = CheckIfPlaceExists;
