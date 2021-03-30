"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walk = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const walk = (directory, arr) => {
    const f = fs_1.default.readdirSync(directory);
    arr = arr || [];
    f.forEach((v) => {
        const d = directory + '\\' + v;
        if (fs_1.default.statSync(d).isDirectory()) {
            arr = exports.walk(d, arr);
        }
        else {
            arr.push(path_1.default.join(directory, '\\', v));
        }
    });
    return arr;
};
exports.walk = walk;
