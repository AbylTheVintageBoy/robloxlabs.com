"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteUniverse = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../../Constants/Directories");
const WriteUniverse = (universeId) => {
    return new Promise((resumefunction) => {
        const path = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        const time = new Date(Date.now()).toISOString();
        if (fs_1.default.existsSync(path))
            return resumefunction(true);
        fs_1.default.mkdirSync(path);
        fs_1.default.writeFileSync(path + '\\RECORD.json', '[]', { encoding: 'utf-8' });
        const info = {
            universeId: universeId,
            places: [],
            stores: 0,
            root: path + '\\',
            created: time,
            lastUpdated: time,
        };
        fs_1.default.writeFileSync(path + '\\UNIVERSE.json', JSON.stringify(info, undefined, 4), { encoding: 'utf-8' });
        fs_1.default.mkdirSync(path + '\\stores');
        fs_1.default.writeFileSync(path + '\\stores\\RECORD.json', '[]', { encoding: 'utf-8' });
        const read = fs_1.default.readFileSync(Directories_1._dirname + '\\Manifest\\persistence\\RECORD.json', 'utf-8');
        const record = JSON.parse(read);
        record.push({
            universeId: universeId,
            created: time,
            purged: null,
        });
        fs_1.default.writeFile(Directories_1._dirname + '\\Manifest\\persistence\\RECORD.json', JSON.stringify(record, undefined, 4), {
            encoding: 'utf-8',
        }, () => {
            return resumefunction(true);
        });
    });
};
exports.WriteUniverse = WriteUniverse;
