"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSessions = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const GetSessions = () => {
    const map = fs_1.default.readdirSync(Directories_1._dirname + '\\Manifest\\sessions');
    const sessions = new Map();
    map.forEach((v) => {
        const session = fs_1.default.readFileSync(Directories_1._dirname + '\\Manifest\\sessions\\' + v, { encoding: 'utf-8' });
        sessions.set(v.split('.').shift(), JSON.parse(session));
    });
    return sessions;
};
exports.GetSessions = GetSessions;
