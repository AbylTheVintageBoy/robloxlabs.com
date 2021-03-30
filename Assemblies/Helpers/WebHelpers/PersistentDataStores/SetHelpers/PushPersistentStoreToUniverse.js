"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushPersistentStoreToUniverse = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../../Constants/Directories");
const PushPersistentStoreToUniverse = (universeId, name, scope = 'global', isSorted = false) => {
    return new Promise((resumefunction) => {
        const path = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        let time = new Date(Date.now()).toISOString();
        if (scope.length === 0)
            scope = '_';
        if (!fs_1.default.existsSync(path))
            return resumefunction(false);
        if (isSorted)
            name = 'sorted_' + name;
        const storePath = path + '\\stores\\' + name;
        let storeExists = false;
        const scopePath = storePath + '\\scopes\\' + scope;
        if (fs_1.default.existsSync(storePath)) {
            storeExists = true;
            if (fs_1.default.existsSync(scopePath)) {
                return resumefunction(true);
            }
        }
        if (!storeExists) {
            fs_1.default.mkdirSync(storePath);
            fs_1.default.writeFileSync(storePath + '\\RECORD.json', '[]', { encoding: 'utf-8' });
            const info = {
                storeName: name,
                type: isSorted ? 'Sorted' : 'Standard',
                universe: universeId,
                scopes: 0,
                root: storePath + '\\',
                created: time,
                lastUpdated: time,
            };
            fs_1.default.writeFileSync(storePath + '\\STORE.json', JSON.stringify(info, undefined, 4), { encoding: 'utf-8' });
            fs_1.default.mkdirSync(storePath + '\\scopes');
            fs_1.default.writeFileSync(storePath + '\\scopes\\RECORD.json', '[]', { encoding: 'utf-8' });
            const read = fs_1.default.readFileSync(path + '\\RECORD.json', 'utf-8');
            const record = JSON.parse(read);
            record.push({
                action: 'StoreAdded',
                data: [
                    {
                        name: name,
                        created: true,
                        purged: false,
                    },
                ],
                date: time,
            });
            fs_1.default.writeFileSync(path + '\\RECORD.json', JSON.stringify(record, undefined, 4), {
                encoding: 'utf-8',
            });
            const read1 = fs_1.default.readFileSync(path + '\\stores\\RECORD.json', 'utf-8');
            const record1 = JSON.parse(read1);
            record1.push({
                storeName: name,
                created: time,
                purged: null,
            });
            fs_1.default.writeFileSync(path + '\\stores\\RECORD.json', JSON.stringify(record1, undefined, 4), {
                encoding: 'utf-8',
            });
            const read2 = fs_1.default.readFileSync(path + '\\UNIVERSE.json', 'utf-8');
            const record2 = JSON.parse(read2);
            record2['stores']++;
            record2['lastUpdated'] = time;
            fs_1.default.writeFileSync(path + '\\UNIVERSE.json', JSON.stringify(record2, undefined, 4), {
                encoding: 'utf-8',
            });
        }
        const info = {
            scopeName: scope,
            store: name,
            universe: universeId,
            keys: 0,
            root: scopePath + '\\',
            created: time,
            lastUpdated: time,
        };
        time = new Date(Date.now()).toISOString();
        fs_1.default.mkdirSync(scopePath);
        fs_1.default.writeFileSync(scopePath + '\\SCOPE.json', JSON.stringify(info, undefined, 4), { encoding: 'utf-8' });
        fs_1.default.mkdirSync(scopePath + (isSorted ? '\\entries' : '\\keys'));
        fs_1.default.writeFileSync(scopePath + '\\RECORD.json', '[]', { encoding: 'utf-8' });
        fs_1.default.writeFileSync(scopePath + (isSorted ? '\\entries\\RECORD.json' : '\\keys\\RECORD.json'), '[]', { encoding: 'utf-8' });
        const read = fs_1.default.readFileSync(storePath + '\\RECORD.json', 'utf-8');
        const record = JSON.parse(read);
        record.push({
            action: 'ScopeAdded',
            data: [
                {
                    name: scope,
                    created: true,
                    purged: false,
                },
            ],
            date: time,
        });
        fs_1.default.writeFileSync(storePath + '\\RECORD.json', JSON.stringify(record, undefined, 4), {
            encoding: 'utf-8',
        });
        const read1 = fs_1.default.readFileSync(storePath + '\\STORE.json', 'utf-8');
        const record1 = JSON.parse(read1);
        record1['scopes']++;
        record1['lastUpdated'] = time;
        fs_1.default.writeFileSync(storePath + '\\STORE.json', JSON.stringify(record1, undefined, 4), {
            encoding: 'utf-8',
        });
        const read2 = fs_1.default.readFileSync(storePath + '\\scopes\\RECORD.json', 'utf-8');
        const record2 = JSON.parse(read2);
        record2.push({
            scopeName: scope,
            created: time,
            purged: null,
        });
        fs_1.default.writeFileSync(storePath + '\\scopes\\RECORD.json', JSON.stringify(record2, undefined, 4), {
            encoding: 'utf-8',
        });
        return resumefunction(true);
    });
};
exports.PushPersistentStoreToUniverse = PushPersistentStoreToUniverse;
