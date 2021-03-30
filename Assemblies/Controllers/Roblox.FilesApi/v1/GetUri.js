"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const Api_1 = require("../../../Api");
dotenv_1.default.config({ path: Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\.env' });
const FFlag = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetFFlags();
exports.default = {
    method: 'All',
    func: (request, response) => {
        if (request.method === 'OPTIONS')
            return response.status(200).send();
        if (FFlag['RequireGlobalHTTPS'] && request.protocol !== 'https')
            return response
                .status(404)
                .sendFile(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\ErrorViews\\FilesApi\\Roblox.404.html');
        if (request.method !== 'POST')
            return response
                .status(405)
                .header({ Allow: 'POST' })
                .send({
                Message: `The requested resource does not support http method '${request.method}'.`,
            });
        if (request.body && (!request.headers['content-type'] || request.headers['content-type'].length === 0))
            return response.status(415).send({
                Message: "The request contains an entity body but no Content-Type header. The inferred media type 'application/octet-stream' is not supported for this resource.",
            });
        if (!request.query.ApiKey.match(/(.{8})(.{4})(.{4})(.{4})(.{12})/)) {
            response.statusMessage = 'ApiKey required in Guid format.';
            return response.status(401).send();
        }
        response.send();
    },
};
