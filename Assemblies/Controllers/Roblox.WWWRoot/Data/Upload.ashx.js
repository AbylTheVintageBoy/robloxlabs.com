"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { parse: parseFormadata } = require('querystring');
const parseContent = rawType => {
    if (!rawType)
        return raw => raw;
    else if (rawType.indexOf('json') > -1)
        return JSON.parse;
    else if (rawType.indexOf('x-www-form-urlencoded') > -1)
        return raw => ({ ...parseFormadata(raw) });
    else if (rawType.indexOf('multipart') > -1)
        return raw => raw;
    else
        return raw => raw;
};
const getRequestBody = (request) => new Promise((resolve, reject) => {
    const contentType = request.headers['content-type'];
    const parser = parseContent(contentType);
    if (parser !== null) {
        let formData;
        request.on('data', data => {
            if (!formData)
                formData = Buffer.from(data);
            else
                formData = Buffer.concat([formData, data]);
        });
        request.on('error', reject);
        request.on('end', () => {
            const parsedData = formData;
            return resolve(parsedData);
        });
    }
    else {
    }
});
const dotenv_1 = __importDefault(require("dotenv"));
const Api_1 = require("../../../Api");
const Roblox_Util_FastLog_1 = require("../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
dotenv_1.default.config({ path: Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\.env' });
const fs_1 = __importDefault(require("fs"));
Roblox_Util_FastLog_1.FASTFLAG('RequireGlobalHTTPS');
function subBuffer(buf, p1, p2) {
    return buf.slice(p1, p2);
}
const AssetsService_1 = require("../../../ApiServices/Roblox.Assets.Service/Roblox.Assets.Service/AssetsService");
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
            const dataa = await getRequestBody(request);
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
            const dataa = await getRequestBody(request);
            let parsingString = dataa.toString('ascii');
            let poss = parsingString.indexOf("Content-Type");
            let poss1 = parsingString.indexOf("\n", poss) + 2;
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], poss.toString(), "");
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], poss1.toString(), "");
            let bnd22 = parsingString.lastIndexOf(sub);
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], bnd22.toString(), "");
            let bnd33 = parsingString.substring(bnd22);
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], bnd33.toString(), "");
            let eeee = dataa.length;
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], sub.length.toString(), "");
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], eeee.toString(), "");
            datToUpload = subBuffer(dataa, poss1 + 1, bnd22 - 4);
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], poss1.toString(), "");
            Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.FLog['dmp'], eeee.toString(), "");
        }
        else {
            const dataa = await getRequestBody(request);
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
        let props = new Object();
        if (request.query.name == null) {
            props["Name"] = "Asset";
        }
        else {
            props["Name"] = request.query.name;
        }
        if (request.query.description == null) {
            props["Description"] = "Asset";
        }
        else {
            props["Description"] = request.query.description;
        }
        if (request.query.type == null) {
            props["AssetType"] = 10;
        }
        else {
            if (isNaN(AssetTypeJSONs[request.query.type])) {
                return response.status(400).send();
            }
            else {
                props["AssetType"] = AssetTypeJSONs[request.query.type];
            }
        }
        if (request.query.ispublic == null) {
            props["IsForSale"] = true;
        }
        else {
            props["IsForSale"] = request.query.ispublic;
        }
        AssetsService_1.AssetsService.uploadAsset(dat, uId, props["AssetType"], JSON.stringify(props), 1111);
        return response.status(200).send();
    },
};
