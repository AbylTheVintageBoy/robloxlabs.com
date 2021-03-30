"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetManifests = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const GetManifests = () => {
    const map = fs_1.default.readdirSync(Directories_1._dirname + '\\Manifest\\users');
    const users = new Map();
    map.forEach((v) => {
        const user = fs_1.default.readFileSync(Directories_1._dirname + '\\Manifest\\users\\' + v, { encoding: 'utf-8' });
        users.set(v.split('.').shift(), JSON.parse(user));
    });
    return users;
};
exports.GetManifests = GetManifests;
