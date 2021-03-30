"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurgeUniverse = void 0;
const Directories_1 = require("../../../Constants/Directories");
const fs_1 = __importDefault(require("fs"));
const PurgeUniverse = (universeId) => {
    return new Promise(async (resumefunction) => {
        const root = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        const dir = Directories_1._dirname + '\\Manifest\\persistence';
        if (!fs_1.default.existsSync(root)) {
            return resumefunction(true);
        }
        const universe = JSON.parse(fs_1.default.readFileSync(root + '\\UNIVERSE.json', 'utf-8'));
        fs_1.default.rmdirSync(root, { recursive: true });
        const record = JSON.parse(fs_1.default.readFileSync(dir + '\\RECORD.json', { encoding: 'utf-8' }));
        record.push({
            universeId: universeId,
            created: universe['created'],
            purged: new Date(Date.now()).toISOString(),
        });
        fs_1.default.writeFileSync(dir + '\\RECORD.json', JSON.stringify(record, undefined, 4));
        return resumefunction(true);
    });
};
exports.PurgeUniverse = PurgeUniverse;
