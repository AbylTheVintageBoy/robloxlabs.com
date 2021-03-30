"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../../Api");
exports.default = {
    method: 'all',
    func: (req, res) => {
        switch (parseInt(req.query.code)) {
            case 400:
                return res
                    .status(400)
                    .sendFile(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\ErrorViews\\WWWRoot\\Roblox.400.html');
            case 403:
                return res
                    .status(403)
                    .sendFile(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\ErrorViews\\WWWRoot\\Roblox.403.html');
            case 404:
                return res
                    .status(404)
                    .sendFile(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\ErrorViews\\WWWRoot\\Roblox.404.html');
            case 500:
                return res
                    .status(500)
                    .sendFile(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\ErrorViews\\WWWRoot\\Roblox.500.html');
            default:
                return res
                    .status(500)
                    .sendFile(Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\ErrorViews\\WWWRoot\\Roblox.DefaultError.html');
        }
    },
};
