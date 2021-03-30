"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurgeKeyFromScope = void 0;
const Directories_1 = require("../../../Constants/Directories");
const PushUniverseToDB_1 = require("../SetHelpers/PushUniverseToDB");
const GetScopeForPersistentStore_1 = require("../GetHelpers/GetScopeForPersistentStore");
const fs_1 = __importDefault(require("fs"));
const PurgeKeyFromScope = (universeId, storeName, scopeName, keyName, isSorted = false) => {
    return new Promise(async (resumefunction) => {
        const dir = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        if (!fs_1.default.existsSync(dir)) {
            PushUniverseToDB_1.WriteUniverse(universeId);
            return resumefunction(false);
        }
        const [success, scope] = await GetScopeForPersistentStore_1.GetScopeForPersistentStore(universeId, storeName.replace('sorted_', ''), scopeName, isSorted);
        let root = null;
        const scoperoot = scope.root;
        let created = '';
        if (success && scope !== null) {
            scope.keys.forEach((k) => {
                if (k.keyName === keyName) {
                    root = k.root;
                    created = k.created;
                }
            });
        }
        if (root === null && success) {
            return resumefunction(false);
        }
        else if (success === false && root === null) {
            return resumefunction(false);
        }
        fs_1.default.rmdirSync(root, { recursive: true });
        const record = JSON.parse(fs_1.default.readFileSync(scoperoot + 'RECORD.json', { encoding: 'utf-8' }));
        record.push({
            action: 'KeyRemoved',
            data: [
                {
                    name: keyName,
                    created: false,
                    purged: true,
                    value: null,
                },
            ],
            date: new Date(Date.now()).toISOString(),
        });
        fs_1.default.writeFileSync(scoperoot + 'RECORD.json', JSON.stringify(record, undefined, 4));
        const record2 = (JSON.parse(fs_1.default.readFileSync(scoperoot + (isSorted ? 'entries\\' : 'keys\\') + 'RECORD.json', { encoding: 'utf-8' })));
        record2.push({
            keyName: keyName,
            created: created,
            updated: new Date(Date.now()).toISOString(),
            purged: new Date(Date.now()).toISOString(),
        });
        fs_1.default.writeFileSync(scoperoot + (isSorted ? 'entries\\' : 'keys\\') + 'RECORD.json', JSON.stringify(record2, undefined, 4));
        const record3 = JSON.parse(fs_1.default.readFileSync(scoperoot + 'SCOPE.json', { encoding: 'utf-8' }));
        record3['keys']--;
        fs_1.default.writeFileSync(scoperoot + 'SCOPE.json', JSON.stringify(record3, undefined, 4));
        return resumefunction(true);
    });
};
exports.PurgeKeyFromScope = PurgeKeyFromScope;
