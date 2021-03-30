"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCsrfSession = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const DeleteCsrfSession = (AuthToken) => {
    try {
        fs_1.default.unlinkSync(Directories_1._dirname + `\\Manifest\\csrf\\${AuthToken}.json`);
    }
    catch (e) { }
};
exports.DeleteCsrfSession = DeleteCsrfSession;
