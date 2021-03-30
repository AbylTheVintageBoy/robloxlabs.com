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
        const value = req.body['value'];
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
        if (req.query['valueLength'] === undefined)
            return res.status(500).send({
                errors: [
                    {
                        code: 6,
                        message: 'The provided data length does not match the amount of data.',
                        userFacingMessage: 'Something went wrong',
                    },
                ],
            });
        if (parseInt(req.query['valueLength']) !== value.length && req.query['valueLength'].length !== 0)
            return res.status(500).send({
                errors: [
                    {
                        code: 6,
                        message: 'The provided data length does not match the amount of data.',
                        userFacingMessage: 'Something went wrong',
                    },
                ],
            });
        if (scope === '')
            scope = '_';
        const success2 = await Api_1.Roblox.Api.Helpers.Helpers.PersistentDataStores.SetHelpers.PushKeyToPersistentStore(universeId, store, scope, k, value, req.query['type'] === 'standard' ? false : true);
        if (!success2 && req.query['type'] === 'sorted')
            return res.status(200).send({
                error: 'Invalid value format for datastore type Sorted.\r\nParameter name: value',
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
            data: value,
        });
    },
};
