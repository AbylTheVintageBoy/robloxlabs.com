"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsService = void 0;
const Api_1 = require("../../../Api");
const Roblox_Util_FastLog_1 = require("../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
const crypto_js_1 = __importDefault(require("crypto-js"));
const fs_1 = __importDefault(require("fs"));
var AssetsService;
(function (AssetsService) {
    function uploadAsset(asset, ID, typeID, props, agent) {
        const dat = asset;
        if (!fs_1.default.existsSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets")) {
            fs_1.default.mkdirSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets");
        }
        let uId = ID;
        let assetJSON = JSON.parse(fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/Asset.json", { encoding: 'utf-8' }));
        if (isNaN(uId)) {
            uId = assetJSON.length + 1;
        }
        let assetDefaults = {};
        assetDefaults["Name"] = "Asset";
        assetDefaults["Description"] = "Asset";
        assetDefaults["IsForSale"] = true;
        assetDefaults["AssetType"] = 10;
        if (assetJSON[uId] != null) {
            let mdhash = crypto_js_1.default.MD5(dat.toString()).toString();
            if (!fs_1.default.existsSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets/" + mdhash)) {
                let str = fs_1.default.createWriteStream(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets/" + mdhash + ".rbxl");
                str.write(dat);
            }
            let totalAVs = JSON.parse(fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/AVS.json", { encoding: 'utf-8' }));
            let A = totalAVs.length;
            if (isNaN(A)) {
                A = 0;
            }
            totalAVs[A] = mdhash;
            assetJSON[uId]['AssetVersions'][A] = A;
            fs_1.default.writeFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/Asset.json", JSON.stringify(assetJSON));
            fs_1.default.writeFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/AVS.json", JSON.stringify(totalAVs));
        }
        else {
            uId = assetJSON.length;
            assetJSON[uId] = {};
            let properties = JSON.parse(props);
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], props, "");
            Object.entries(properties).forEach(([key, value]) => {
                assetJSON[uId][key] = value;
            });
            assetJSON[uId]["CreatorId"] = agent;
            let mdhash = crypto_js_1.default.MD5(dat.toString()).toString();
            if (!fs_1.default.existsSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets/" + mdhash)) {
                let str = fs_1.default.createWriteStream(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets/" + mdhash);
                str.write(dat);
            }
            assetJSON[uId]["AssetVersions"] = [];
            let totalAVs = JSON.parse(fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/AVS.json", { encoding: 'utf-8' }));
            let A = assetJSON[uId]['AssetVersions'].length + 1;
            if (isNaN(A)) {
                A = 0;
            }
            let E = totalAVs.length + 1;
            if (isNaN(E)) {
                E = 1;
            }
            totalAVs[E] = mdhash;
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], "asset uploaded", "");
            assetJSON[uId]['AssetVersions'].push(E.toString());
            fs_1.default.writeFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/Asset.json", JSON.stringify(assetJSON));
            fs_1.default.writeFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/AVS.json", JSON.stringify(totalAVs));
        }
    }
    AssetsService.uploadAsset = uploadAsset;
})(AssetsService = exports.AssetsService || (exports.AssetsService = {}));
