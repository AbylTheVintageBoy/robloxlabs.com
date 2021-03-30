"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../../../Api");
const fs_1 = __importDefault(require("fs"));
exports.default = {
    method: 'all',
    func: async (_req, res, next) => {
        let mainassets = JSON.parse(fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/Asset.json", { encoding: 'utf-8' }));
        if (!isNaN(parseInt(_req.query.id))) {
            if (mainassets[parseInt(_req.query.id) - 1] != null) {
                let aset = mainassets[parseInt(_req.query.id) - 1];
                let massetvers = JSON.parse(fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/AVS.json", { encoding: 'utf-8' }));
                let av = aset["AssetVersions"][aset["AssetVersions"].length - 1];
                let hash = massetvers[av];
                if (fs_1.default.existsSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets/" + hash)) {
                    const datStream = fs_1.default.createReadStream(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets/" + hash);
                    datStream.pipe(res);
                }
                else {
                    return res.status(404).send();
                }
            }
            else {
                return res.status(403).send();
            }
        }
        else {
            return res.status(500).send();
        }
    },
};
