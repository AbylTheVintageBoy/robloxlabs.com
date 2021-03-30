"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetRequestProcessor = void 0;
const FilesClient_1 = require("../../../ApiClients/Roblox.Files.Client/Roblox.Files.Client/Implementation/FilesClient");
var AssetRequestProcessor;
(function (AssetRequestProcessor) {
    async function GetUri(assetHash, item, requireSecureUri, isRequestedHashCopyrightProtected, replacedHash) {
        return await FilesClient_1.FilesClient.GetUri(replacedHash, requireSecureUri);
    }
    AssetRequestProcessor.GetUri = GetUri;
})(AssetRequestProcessor = exports.AssetRequestProcessor || (exports.AssetRequestProcessor = {}));
