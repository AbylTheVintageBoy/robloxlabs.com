"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPoints = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const SetPoints = (universeId, userId, amount) => {
    return new Promise(async (resumefunction) => {
        let path = Directories_1._dirname + "\\Manifest\\universes\\" + universeId.toString();
        if (!fs_1.default.existsSync(path)) {
            return resumefunction([false, null]);
        }
        path += "\\points.json";
        if (fs_1.default.existsSync(path)) {
            let ptray = JSON.parse(fs_1.default.readFileSync(path, { encoding: 'utf-8' }));
            ptray[userId] = ptray[userId] + amount;
            fs_1.default.writeFileSync(path, JSON.stringify(ptray));
            return resumefunction([true, ptray[userId]]);
        }
        else {
            let ptray = {};
            ptray[userId] = amount;
            fs_1.default.writeFileSync(path, JSON.stringify(ptray));
            return resumefunction([true, amount]);
        }
        return resumefunction([false, "0"]);
    });
};
exports.SetPoints = SetPoints;
