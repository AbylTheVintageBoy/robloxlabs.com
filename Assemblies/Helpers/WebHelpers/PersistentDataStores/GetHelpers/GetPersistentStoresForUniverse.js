"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPersistentStoresForUniverse = void 0;
const Directories_1 = require("../../../Constants/Directories");
const PushUniverseToDB_1 = require("../SetHelpers/PushUniverseToDB");
const GetPersistentStoreForUniverse_1 = require("./GetPersistentStoreForUniverse");
const fs_1 = __importDefault(require("fs"));
const GetPersistentStoresForUniverse = (universeId) => {
    return new Promise((resumefunction) => {
        const dir = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        if (!fs_1.default.existsSync(dir)) {
            if (PushUniverseToDB_1.WriteUniverse(universeId))
                return resumefunction([true, null]);
            return resumefunction([false, null]);
        }
        const storesdir = dir + '\\stores\\';
        const stores = [];
        fs_1.default.readdirSync(storesdir).forEach(async (b) => {
            if (fs_1.default.statSync(storesdir + b).isDirectory()) {
                const [success, store] = await GetPersistentStoreForUniverse_1.GetPersistentStoreForUniverse(universeId, b.replace('sorted_', ''), undefined, b.startsWith('sorted_') ? true : false);
                if (success && store !== null) {
                    stores.push(store);
                }
            }
        });
        return resumefunction([true, stores]);
    });
};
exports.GetPersistentStoresForUniverse = GetPersistentStoresForUniverse;
