"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCsrfSession = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const GetCsrfSession = (sessionFile) => {
    try {
        return JSON.parse(fs_1.default.readFileSync(Directories_1._dirname + '\\Manifest\\csrf\\' + sessionFile, { encoding: 'utf-8' }));
    }
    catch {
        return { c: 0, sub: '', token: '' };
    }
};
exports.GetCsrfSession = GetCsrfSession;
