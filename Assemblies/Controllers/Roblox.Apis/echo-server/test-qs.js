"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../../../Data/Keys/Api");
const FetchKeyFromObjectCaseInsensitive_1 = require("../../../Util/FetchKeyFromObjectCaseInsensitive");
exports.default = {
    method: 'all',
    func: async (_req, res) => {
        if (FetchKeyFromObjectCaseInsensitive_1.FetchKeyFromObjectCaseInsensitive(_req.query, 'ApiKey') !== Api_1.ApiKeys.TestApi)
            return res.status(404).send();
        res.send('Your apiKey is very funny');
    },
};
