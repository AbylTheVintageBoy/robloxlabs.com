"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearCachedSessions = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const ClearCachedSessions = () => {
    return new Promise((resolve, reject) => {
        try {
            fs_1.default.rmdirSync(Directories_1._dirname + '\\Manifest\\sessions', { recursive: true });
            fs_1.default.mkdirSync(Directories_1._dirname + '\\Manifest\\sessions');
            fs_1.default.rmdirSync(Directories_1._dirname + '\\Manifest\\csrf', { recursive: true });
            fs_1.default.mkdirSync(Directories_1._dirname + '\\Manifest\\csrf');
            fs_1.default.rmdirSync(Directories_1._dirname + '\\Manifest\\pages', { recursive: true });
            fs_1.default.mkdirSync(Directories_1._dirname + '\\Manifest\\pages');
            resolve();
        }
        catch (err) {
            reject(err);
        }
    });
};
exports.ClearCachedSessions = ClearCachedSessions;
