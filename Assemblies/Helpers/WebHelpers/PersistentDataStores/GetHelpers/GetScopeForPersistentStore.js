"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScopeForPersistentStore = void 0;
const Directories_1 = require("../../../Constants/Directories");
const PushUniverseToDB_1 = require("../SetHelpers/PushUniverseToDB");
const GetPersistentStoreForUniverse_1 = require("./GetPersistentStoreForUniverse");
const fs_1 = __importDefault(require("fs"));
const GetScopeForPersistentStore = (universeId, storeName, scopeName, isSorted = false) => {
    return new Promise(async (resumefunction) => {
        const dir = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        if (!fs_1.default.existsSync(dir)) {
            PushUniverseToDB_1.WriteUniverse(universeId);
            return resumefunction([false, null]);
        }
        const [success, store] = await GetPersistentStoreForUniverse_1.GetPersistentStoreForUniverse(universeId, storeName.replace('sorted_', ''), scopeName, isSorted);
        let scope = null;
        if (success && store !== null) {
            store.scopes.forEach((s) => {
                if (s.scopeName === scopeName)
                    scope = s;
            });
        }
        if (store === null) {
            return resumefunction([false, null]);
        }
        return resumefunction([true, scope]);
    });
};
exports.GetScopeForPersistentStore = GetScopeForPersistentStore;
