"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const Api_1 = require("../../../Api");
const Roblox_Util_FastLog_1 = require("../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
const crypto_js_1 = __importDefault(require("crypto-js"));
const { parseBody } = require('bodyparser.js');
dotenv_1.default.config({ path: Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\.env' });
const fs_1 = __importDefault(require("fs"));
Roblox_Util_FastLog_1.FASTFLAG('RequireGlobalHTTPS');
function subBuffer(buf, p1, p2) {
    return buf.slice(p1, p2);
}
exports.default = {
    method: 'All',
    func: async (request, response) => {
        if (request.method === 'OPTIONS')
            return response.status(200).send();
        if (Roblox_Util_FastLog_1.FFlag['RequireGlobalHTTPS'] && request.protocol !== 'http') {
            return response.status(403).send({
                errors: [
                    {
                        code: 0,
                        message: 'HTTPS Required.',
                    }
                ],
            });
        }
        var datToUpload;
        if (request.headers['content-type'] === 'application/xml') {
            const dataa = await parseBody(request);
            const keys = Object.keys(dataa);
            let parsingString = "";
            for (const key in keys) {
                parsingString += dataa[key].toString();
            }
            datToUpload = parsingString;
        }
        else if (request.headers['content-type'].search("multipart/form-data") != -1) {
            let bnd1 = request.headers['content-type'].indexOf("boundary=") + "boundary=".length;
            let sub = request.headers['content-type'].substr(bnd1);
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], sub, "");
            let parsingString = "";
            const dataa = await parseBody(request);
            const keys = Object.keys(dataa);
            for (const key in keys) {
                parsingString += dataa[key].toString();
            }
            let poss = parsingString.indexOf("Content-Type");
            let poss1 = parsingString.indexOf("\n", poss) + 2;
            let bnd22 = parsingString.lastIndexOf("--" + sub);
            datToUpload = subBuffer(dataa, poss1 + 1, bnd22 - 1);
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], datToUpload, "");
        }
        else {
            const dataa = await parseBody(request);
            const keys = Object.keys(dataa);
            for (const key in keys) {
                Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], key, dataa[key]);
            }
            let parsingString = "";
            for (const key in keys) {
                parsingString += dataa[key].toString();
            }
            datToUpload = parsingString;
        }
        const dat = datToUpload;
        if (!fs_1.default.existsSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets")) {
            fs_1.default.mkdirSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets");
        }
        let uId = parseInt(request.query.assetid);
        let assetJSON = JSON.parse(fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/Asset.json", { encoding: 'utf-8' }));
        let AssetTypeJSONs = JSON.parse(fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/AssetType.json", { encoding: 'utf-8' }));
        if (isNaN(uId)) {
            uId = assetJSON.length + 1;
        }
        let name = "";
        let description = "";
        let typeID = 0;
        let forsale = true;
        if (request.query.name == null) {
            name = "Asset";
        }
        else {
            name = request.query.name;
        }
        if (request.query.description == null) {
            description = "Asset";
        }
        else {
            description = request.query.description;
        }
        if (request.query.type == null) {
            typeID = 10;
        }
        else {
            if (isNaN(AssetTypeJSONs[request.query.type])) {
                return response.status(400).send();
            }
            else {
                typeID = AssetTypeJSONs[request.query.type];
            }
        }
        if (request.query.ispublic == null) {
            forsale = true;
        }
        else {
            forsale = request.query.ispublic;
        }
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
            return response.status(200).send();
        }
        else {
            uId = assetJSON.length;
            assetJSON[uId] = {};
            assetJSON[uId]["AssetId"] = uId;
            assetJSON[uId]["Name"] = name;
            assetJSON[uId]["Description"] = description;
            assetJSON[uId]["IsForSale"] = forsale;
            assetJSON[uId]["AssetType"] = typeID;
            let mdhash = crypto_js_1.default.MD5(dat.toString()).toString();
            if (!fs_1.default.existsSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets/" + mdhash)) {
                let str = fs_1.default.createWriteStream(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/Manifest/assets/" + mdhash + ".rbxl");
                str.write(dat);
            }
            assetJSON[uId]["AssetVersions"] = [];
            let totalAVs = JSON.parse(fs_1.default.readFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/AVS.json", { encoding: 'utf-8' }));
            let A = totalAVs.length + 1;
            if (isNaN(A)) {
                A = 0;
            }
            totalAVs[A] = mdhash;
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], "asset uploaded", "");
            assetJSON[uId]['AssetVersions'][A.toString()] = mdhash;
            fs_1.default.writeFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/Asset.json", JSON.stringify(assetJSON));
            fs_1.default.writeFileSync(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + "/InternalCDN/AVS.json", JSON.stringify(totalAVs));
            return response.status(200).send();
        }
    },
};
