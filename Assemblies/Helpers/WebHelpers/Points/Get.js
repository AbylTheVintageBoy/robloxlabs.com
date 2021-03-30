"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPoints = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const GetPoints = (universeId, userId) => {
    return new Promise(async (resumefunction) => {
        let path = Directories_1._dirname + "\\Manifest\\universes\\" + universeId.toString();
        if (!fs_1.default.existsSync(path)) {
            return resumefunction([false, null]);
        }
        path += "\\points.json";
        if (fs_1.default.existsSync(path)) {
            let ptray = JSON.parse(fs_1.default.readFileSync(path, { encoding: 'utf-8' }));
            let e = ptray[userId];
            if (e == null) {
                ptray[userId] = 0;
                fs_1.default.writeFileSync(path, JSON.stringify(ptray));
                return resumefunction([true, "0"]);
            }
            else {
                return resumefunction([true, e]);
            }
        }
        else {
            let ptray = {};
            ptray[userId] = 0;
            fs_1.default.writeFileSync(path, JSON.stringify(ptray));
            return resumefunction([true, "0"]);
        }
        return resumefunction([false, "0"]);
    });
};
exports.GetPoints = GetPoints;
