"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPersistentStoreForUniverse = void 0;
const Directories_1 = require("../../../Constants/Directories");
const PushUniverseToDB_1 = require("../SetHelpers/PushUniverseToDB");
const PushPersistentStoreToUniverse_1 = require("../SetHelpers/PushPersistentStoreToUniverse");
const fs_1 = __importDefault(require("fs"));
const GetPersistentStoreForUniverse = (universeId, storeName, scopeName = 'global', isSorted = false) => {
    return new Promise((resumefunction) => {
        const dir = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        if (!fs_1.default.existsSync(dir)) {
            if (!PushUniverseToDB_1.WriteUniverse(universeId))
                return resumefunction([false, null]);
        }
        const persistentstorepath = dir + '\\stores\\' + (isSorted ? 'sorted_' + storeName : storeName);
        if (!fs_1.default.existsSync(persistentstorepath)) {
            PushPersistentStoreToUniverse_1.PushPersistentStoreToUniverse(universeId, storeName, scopeName, isSorted);
        }
        const store = JSON.parse(fs_1.default.readFileSync(persistentstorepath + '\\STORE.json', 'utf-8'));
        const returnData = {
            storeName: store['storeName'],
            type: store['type'],
            universe: store['universe'],
            root: store['root'],
            scopeCount: store['scopes'],
            created: store['created'],
            lastUpdated: store['lastUpdated'],
            scopes: [],
        };
        const scopes = [];
        fs_1.default.readdirSync(persistentstorepath + '\\scopes\\').forEach((v) => {
            if (fs_1.default.statSync(persistentstorepath + '\\scopes\\' + v).isDirectory()) {
                const name = persistentstorepath + '\\scopes\\' + v;
                const scope = JSON.parse(fs_1.default.readFileSync(name + '\\SCOPE.json', 'utf-8'));
                const keys = [];
                const keysPath = name + (isSorted ? '\\entries\\' : '\\keys\\');
                fs_1.default.readdirSync(keysPath).forEach((k) => {
                    if (fs_1.default.statSync(keysPath + k).isDirectory()) {
                        const keyname = keysPath + k;
                        const key = (JSON.parse(fs_1.default.readFileSync(keyname + (isSorted ? '\\ENTRY.json' : '\\KEY.json'), 'utf-8')));
                        const value = JSON.parse(fs_1.default.readFileSync(keyname + '\\VALUE.json', 'utf-8'));
                        const versions = (JSON.parse(fs_1.default.readFileSync(keyname + (isSorted ? '\\ENTRY' : '\\KEY') + 'VERSIONS.json', 'utf-8')));
                        const KeyToPush = {
                            keyName: key['keyName'],
                            scope: key['scope'],
                            store: key['store'],
                            root: key['root'],
                            universe: key['universe'],
                            version: key['version'],
                            created: key['created'],
                            lastUpdated: key['lastUpdated'],
                            value: {
                                raw: value['value'],
                                type: value['type'],
                            },
                            versions: [],
                        };
                        versions.forEach((v) => {
                            KeyToPush['versions'].push(v);
                        });
                        keys.push(KeyToPush);
                    }
                });
                scopes.push({
                    scopeName: scope['scopeName'],
                    store: scope['store'],
                    universe: scope['universe'],
                    root: scope['root'],
                    keysCount: scope['keys'],
                    created: scope['created'],
                    lastUpdated: scope['lastUpdated'],
                    keys: keys,
                });
            }
        });
        returnData['scopes'] = scopes;
        return resumefunction([true, returnData]);
    });
};
exports.GetPersistentStoreForUniverse = GetPersistentStoreForUniverse;
