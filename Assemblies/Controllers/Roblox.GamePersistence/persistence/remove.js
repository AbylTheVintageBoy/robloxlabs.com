"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../../../Api");
exports.default = {
    method: 'all',
    func: async (req, res) => {
        let usequery = false;
        if (req.headers['roblox-place-id'] === undefined) {
            usequery = true;
        }
        if (!usequery) {
            if (parseInt(req.headers['roblox-place-id']) === NaN)
                return res.status(403).send({
                    errors: [
                        {
                            code: 0,
                            message: 'Not allowed',
                        },
                    ],
                });
        }
        const placeId = parseInt(!usequery ? req.headers['roblox-place-id'] : req.query['placeId']);
        const [success, universeId] = Api_1.Roblox.Api.Helpers.Helpers.Places.GetUniverseIdFromPlaceId(placeId === NaN ? -1 : placeId);
        if (!success)
            return res.status(403).send({
                errors: [
                    {
                        code: 0,
                        message: 'You do not have permission to manage this place. Universe is null.',
                    },
                ],
            });
        if (universeId === null)
            return res.status(403).send({
                errors: [
                    {
                        code: 0,
                        message: 'You do not have permission to manage this place. Universe is null.',
                    },
                ],
            });
        const k = req.query['target'];
        let scope = req.query['scope'];
        const store = req.query['key'];
        if (req.query['type'] !== 'standard')
            if (req.query['type'] !== 'sorted')
                return res.status(400).send({
                    errors: [
                        {
                            code: 0,
                            message: 'The request is invalid.',
                        },
                    ],
                });
        const [, key] = await Api_1.Roblox.Api.Helpers.Helpers.PersistentDataStores.GetHelpers.GetKeyOrEntryForScope(universeId, store, scope, k, req.query['type'] === 'standard' ? false : true);
        if (key === null) {
            return res.status(200).send({
                data: null,
            });
        }
        const value = key.value.raw;
        if (scope === '')
            scope = '_';
        const success2 = await Api_1.Roblox.Api.Helpers.Helpers.PersistentDataStores.PurgeHelpers.PurgeKeyFromScope(universeId, store, scope, k, req.query['type'] === 'standard' ? false : true);
        if (!success2)
            return res.status(200).send({
                error: 'Unknown error',
            });
        if (!success2)
            return res.status(500).send({
                errors: [
                    {
                        code: 0,
                        message: 'InternalServerError',
                    },
                ],
            });
        return res.status(200).send({
            data: value.toString(),
        });
    },
};
