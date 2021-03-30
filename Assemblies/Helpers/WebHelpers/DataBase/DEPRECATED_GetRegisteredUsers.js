"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRegisteredUsers = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const GetRegisteredUsers = () => {
    const registeredUsers = fs_1.default.readFileSync(Directories_1._dirname + '\\Manifest\\users.json', 'ascii');
    return JSON.parse(registeredUsers);
};
exports.GetRegisteredUsers = GetRegisteredUsers;
