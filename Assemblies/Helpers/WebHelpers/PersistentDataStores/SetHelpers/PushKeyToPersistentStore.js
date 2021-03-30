"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushKeyToPersistentStore = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../../Constants/Directories");
const PushUniverseToDB_1 = require("./PushUniverseToDB");
const PushPersistentStoreToUniverse_1 = require("./PushPersistentStoreToUniverse");
const enc_base64_1 = __importDefault(require("crypto-js/enc-base64"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const PushKeyToPersistentStore = (universeId, name, scope = 'global', key = '', value = undefined, isSorted = false, userIds = [], attributes = []) => {
    return new Promise(async (resumefunction) => {
        const path = Directories_1._dirname + '\\Manifest\\persistence\\' + universeId;
        const time = new Date(Date.now()).toISOString();
        if (scope.length === 0)
            scope = '_';
        if (!fs_1.default.existsSync(path))
            await PushUniverseToDB_1.WriteUniverse(universeId);
        if (isSorted)
            name = 'sorted_' + name;
        if (isSorted && !parseInt(value.toString())) {
            return resumefunction(false);
        }
        if (isSorted)
            value = parseInt(value.toString());
        const storePath = path + '\\stores\\' + name;
        const scopePath = storePath + '\\scopes\\' + scope;
        const keyPath = scopePath + (isSorted ? '\\entries\\' : '\\keys\\') + key;
        if (!fs_1.default.existsSync(storePath)) {
            await PushPersistentStoreToUniverse_1.PushPersistentStoreToUniverse(universeId, name.replace('sorted_', ''), scope, isSorted);
        }
        if (fs_1.default.existsSync(keyPath)) {
            const key = (JSON.parse(fs_1.default.readFileSync(keyPath + (isSorted ? '\\ENTRY' : '\\KEY') + '.json', 'utf-8')));
            const keyversions = (JSON.parse(fs_1.default.readFileSync(keyPath + (isSorted ? '\\ENTRY' : '\\KEY') + 'VERSIONS.json', 'utf-8')));
            const read = fs_1.default.readFileSync(keyPath + '\\VALUE.json', 'utf-8');
            const record = JSON.parse(read);
            if (value === record['value'])
                return resumefunction(true);
            record['value'] = value;
            record['type'] = typeof value;
            record['md5'] = enc_base64_1.default.stringify(crypto_js_1.default.MD5(value.toString()));
            fs_1.default.writeFileSync(keyPath + '\\VALUE.json', JSON.stringify(record, undefined, 4), {
                encoding: 'utf-8',
            });
            const read1 = fs_1.default.readFileSync(scopePath + '\\SCOPE.json', 'utf-8');
            const record1 = JSON.parse(read1);
            record1['lastUpdated'] = time;
            fs_1.default.writeFileSync(scopePath + '\\SCOPE.json', JSON.stringify(record1, undefined, 4), {
                encoding: 'utf-8',
            });
            const read2 = fs_1.default.readFileSync(scopePath + (isSorted ? '\\entries\\' : '\\keys\\') + 'RECORD.json', 'utf-8');
            const record2 = JSON.parse(read2);
            record2.push({
                keyName: key,
                created: key['created'],
                updated: time,
                purged: null,
            });
            fs_1.default.writeFileSync(scopePath + (isSorted ? '\\entries\\' : '\\keys\\') + 'RECORD.json', JSON.stringify(record2, undefined, 4), {
                encoding: 'utf-8',
            });
            key['lastUpdated'] = time;
            key['version']++;
            keyversions.push({
                version: key['version'],
                date: time,
            });
            fs_1.default.writeFileSync(keyPath + (isSorted ? '\\ENTRY' : '\\KEY') + '.json', JSON.stringify(key, undefined, 4), {
                encoding: 'utf-8',
            });
            fs_1.default.writeFileSync(keyPath + (isSorted ? '\\ENTRY' : '\\KEY') + 'VERSIONS.json', JSON.stringify(keyversions, undefined, 4), {
                encoding: 'utf-8',
            });
            const read3 = fs_1.default.readFileSync(scopePath + '\\RECORD.json', 'utf-8');
            const record3 = JSON.parse(read3);
            record3.push({
                action: 'KeyUpdated',
                data: [
                    {
                        name: key,
                        created: true,
                        purged: false,
                        value: {
                            Raw: value,
                            type: typeof value,
                        },
                    },
                ],
                date: time,
            });
            fs_1.default.writeFileSync(scopePath + '\\RECORD.json', JSON.stringify(record3, undefined, 4), {
                encoding: 'utf-8',
            });
            return resumefunction(true);
        }
        const info = {
            keyName: key,
            scope: scope,
            store: name,
            universe: 1,
            userIds: userIds,
            attributes: attributes,
            root: keyPath + '\\',
            version: 1,
            created: time,
            lastUpdated: time,
        };
        const keyversions = [
            {
                version: 1,
                date: time,
            },
        ];
        fs_1.default.mkdirSync(keyPath);
        fs_1.default.writeFileSync(keyPath + (isSorted ? '\\ENTRY' : '\\KEY') + '.json', JSON.stringify(info, undefined, 4), {
            encoding: 'utf-8',
        });
        fs_1.default.writeFileSync(keyPath + (isSorted ? '\\ENTRY' : '\\KEY') + 'VERSIONS.json', JSON.stringify(keyversions, undefined, 4), {
            encoding: 'utf-8',
        });
        fs_1.default.mkdirSync(keyPath + '\\userids');
        fs_1.default.writeFileSync(keyPath + '\\RECORD.json', '[]', { encoding: 'utf-8' });
        fs_1.default.writeFileSync(keyPath + '\\VALUE.json', JSON.stringify({
            value: value,
            type: typeof value,
            md5: enc_base64_1.default.stringify(crypto_js_1.default.MD5(value.toString())),
        }, undefined, 4), { encoding: 'utf-8' });
        const read = fs_1.default.readFileSync(scopePath + (isSorted ? '\\entries\\RECORD.json' : '\\keys\\RECORD.json'), 'utf-8');
        const record = JSON.parse(read);
        record.push({
            keyName: key,
            created: time,
            updated: null,
            purged: null,
        });
        fs_1.default.writeFileSync(scopePath + (isSorted ? '\\entries\\RECORD.json' : '\\keys\\RECORD.json'), JSON.stringify(record, undefined, 4), {
            encoding: 'utf-8',
        });
        const read1 = fs_1.default.readFileSync(scopePath + '\\SCOPE.json', 'utf-8');
        const record1 = JSON.parse(read1);
        record1['keys']++;
        record1['lastUpdated'] = time;
        fs_1.default.writeFileSync(scopePath + '\\SCOPE.json', JSON.stringify(record1, undefined, 4), {
            encoding: 'utf-8',
        });
        const read2 = fs_1.default.readFileSync(scopePath + '\\RECORD.json', 'utf-8');
        const record2 = JSON.parse(read2);
        record2.push({
            action: 'KeyAdded',
            data: [
                {
                    name: key,
                    created: true,
                    purged: false,
                    value: {
                        Raw: value,
                        type: typeof value,
                    },
                },
            ],
            date: time,
        });
        fs_1.default.writeFileSync(scopePath + '\\RECORD.json', JSON.stringify(record2, undefined, 4), {
            encoding: 'utf-8',
        });
        return resumefunction(true);
    });
};
exports.PushKeyToPersistentStore = PushKeyToPersistentStore;
