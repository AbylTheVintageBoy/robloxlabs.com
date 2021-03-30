"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../../../Api");
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        const DFString = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetDFStrings();
        return res.send(DFString['CharacterAppearranceTestString']);
    },
};
