"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetKeysOrEntriesForScope = void 0;
const Directories_1 = require("../../../Constants/Directories");
const PushUniverseToDB_1 = require("../SetHelpers/PushUniverseToDB");
const PushPersistentStoreToUniverse_1 = require("../SetHelpers/PushPersistentStoreToUniverse");
const GetScopeForPersistentStore_1 = require("./GetScopeForPersistentStore");
const fs_1 = __importDefault(require("fs"));
const GetKeysOrEntriesForScope = (universeId, name, scope = 'global', isSorted = false) => {
    return new Promise(async (resumefunction) => {
        const dir1 = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        const dir2 = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId + '\\stores\\' + name + '\\scopes\\' + scope;
        if (!fs_1.default.existsSync(dir1)) {
            if (PushUniverseToDB_1.WriteUniverse(universeId))
                return resumefunction([true, null]);
            return resumefunction([false, null]);
        }
        if (!fs_1.default.existsSync(dir2)) {
            if (PushPersistentStoreToUniverse_1.PushPersistentStoreToUniverse(universeId, name, scope, isSorted))
                return resumefunction([true, null]);
            return resumefunction([false, null]);
        }
        let keysOrEntries = [];
        const [success, s] = await GetScopeForPersistentStore_1.GetScopeForPersistentStore(universeId, name, scope, isSorted);
        if (success && s !== null) {
            keysOrEntries = s.keys;
        }
        return resumefunction([true, keysOrEntries]);
    });
};
exports.GetKeysOrEntriesForScope = GetKeysOrEntriesForScope;
