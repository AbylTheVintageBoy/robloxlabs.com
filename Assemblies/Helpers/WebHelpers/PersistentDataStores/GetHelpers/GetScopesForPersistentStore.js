"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScopesForPersistentStore = void 0;
const Directories_1 = require("../../../Constants/Directories");
const PushUniverseToDB_1 = require("../SetHelpers/PushUniverseToDB");
const PushPersistentStoreToUniverse_1 = require("../SetHelpers/PushPersistentStoreToUniverse");
const GetPersistentStoreForUniverse_1 = require("./GetPersistentStoreForUniverse");
const fs_1 = __importDefault(require("fs"));
const GetScopesForPersistentStore = (universeId, name, isSorted = false) => {
    return new Promise(async (resumefunction) => {
        const dir = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId + '\\stores\\' + name;
        const dir1 = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        if (!fs_1.default.existsSync(dir1)) {
            if (PushUniverseToDB_1.WriteUniverse(universeId))
                return resumefunction([true, null]);
            return resumefunction([false, null]);
        }
        if (!fs_1.default.existsSync(dir)) {
            if (PushPersistentStoreToUniverse_1.PushPersistentStoreToUniverse(universeId, name, 'global', isSorted))
                return resumefunction([true, null]);
            return resumefunction([false, null]);
        }
        let scopes = [];
        const [success, store] = await GetPersistentStoreForUniverse_1.GetPersistentStoreForUniverse(universeId, name, undefined, isSorted);
        if (success && store !== null) {
            scopes = store.scopes;
        }
        return resumefunction([true, scopes]);
    });
};
exports.GetScopesForPersistentStore = GetScopesForPersistentStore;
