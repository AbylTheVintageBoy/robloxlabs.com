"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetKeyOrEntryForScope = void 0;
const Directories_1 = require("../../../Constants/Directories");
const PushUniverseToDB_1 = require("../SetHelpers/PushUniverseToDB");
const GetScopeForPersistentStore_1 = require("./GetScopeForPersistentStore");
const fs_1 = __importDefault(require("fs"));
const GetKeyOrEntryForScope = (universeId, storeName, scopeName, keyName, isSorted = false) => {
    return new Promise(async (resumefunction) => {
        const dir = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        if (!fs_1.default.existsSync(dir)) {
            PushUniverseToDB_1.WriteUniverse(universeId);
            return resumefunction([false, null]);
        }
        const [success, scope] = await GetScopeForPersistentStore_1.GetScopeForPersistentStore(universeId, storeName.replace('sorted_', ''), scopeName, isSorted);
        let key = null;
        if (success && scope !== null) {
            scope.keys.forEach((k) => {
                if (k.keyName === keyName)
                    key = k;
            });
        }
        if (key === null && success) {
            return resumefunction([true, null]);
        }
        else if (success === false && key === null) {
            return resumefunction([false, null]);
        }
        return resumefunction([true, key]);
    });
};
exports.GetKeyOrEntryForScope = GetKeyOrEntryForScope;
