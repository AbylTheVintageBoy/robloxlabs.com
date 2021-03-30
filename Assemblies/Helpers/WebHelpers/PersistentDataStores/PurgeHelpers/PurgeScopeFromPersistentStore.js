"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurgeScopeFromPersistentStore = void 0;
const Directories_1 = require("../../../Constants/Directories");
const PushUniverseToDB_1 = require("../SetHelpers/PushUniverseToDB");
const GetPersistentStoreForUniverse_1 = require("../GetHelpers/GetPersistentStoreForUniverse");
const fs_1 = __importDefault(require("fs"));
const PurgeScopeFromPersistentStore = (universeId, storeName, scopeName, isSorted = false) => {
    return new Promise(async (resumefunction) => {
        const dir = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        if (!fs_1.default.existsSync(dir)) {
            PushUniverseToDB_1.WriteUniverse(universeId);
            return resumefunction(false);
        }
        const [success, store] = await GetPersistentStoreForUniverse_1.GetPersistentStoreForUniverse(universeId, storeName.replace('sorted_', ''), scopeName, isSorted);
        let root = null;
        const storeroot = store.root;
        let created = '';
        if (success && store !== null) {
            store.scopes.forEach((s) => {
                if (s.scopeName === scopeName) {
                    root = s.root;
                    created = s.created;
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
        const record = JSON.parse(fs_1.default.readFileSync(storeroot + '\\RECORD.json', { encoding: 'utf-8' }));
        record.push({
            action: 'ScopeRemoved',
            data: [
                {
                    name: scopeName,
                    created: false,
                    purged: true,
                },
            ],
            date: new Date(Date.now()).toISOString(),
        });
        fs_1.default.writeFileSync(storeroot + '\\RECORD.json', JSON.stringify(record, undefined, 4));
        const record2 = JSON.parse(fs_1.default.readFileSync(storeroot + '\\scopes\\RECORD.json', { encoding: 'utf-8' }));
        record2.push({
            scopeName: scopeName,
            created: created,
            purged: new Date(Date.now()).toISOString(),
        });
        fs_1.default.writeFileSync(storeroot + '\\scopes\\RECORD.json', JSON.stringify(record2, undefined, 4));
        const record3 = JSON.parse(fs_1.default.readFileSync(storeroot + '\\STORE.json', { encoding: 'utf-8' }));
        record3['scopes']--;
        fs_1.default.writeFileSync(storeroot + '\\STORE.json', JSON.stringify(record3, undefined, 4));
        return resumefunction(true);
    });
};
exports.PurgeScopeFromPersistentStore = PurgeScopeFromPersistentStore;
