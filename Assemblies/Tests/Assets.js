"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssetRequestProcessor_1 = require("../Web/Assets/Roblox.Web.Assets/AssetRequestProcessor");
(async () => {
    await AssetRequestProcessor_1.AssetRequestProcessor.GetUri('', {}, false, false, 'hash');
})();
