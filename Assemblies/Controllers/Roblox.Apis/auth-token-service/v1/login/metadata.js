"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../../../../../Api");
exports.default = {
    method: 'all',
    func: (_req, res) => {
        const DFFlag = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetDFFlags();
        return res.send({
            IsLoginCodeButtonDisplayed: DFFlag['IsLoginCodeButtonDisplayed'],
            IsCodeValidationDisplayed: DFFlag['IsCodeValidationDisplayed'],
        });
    },
};
