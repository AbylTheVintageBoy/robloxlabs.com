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
                        message: 'Not allowed',
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
        let k = req.body['qkeys[0].target'];
        let scope = req.body['qkeys[0].scope'];
        const store = req.body['qkeys[0].key'];
        if (!req.body['qkeys[0].scope']) {
            if (req.query['scope']) {
                scope = req.query['scope'];
            }
        }
        if (scope === '')
            scope = '_';
        if (!req.body['qkeys[0].key'] && req.body['qkeys[0].target']) {
            k = req.body['qkeys[0].target'];
        }
        if (req.body['qkeys[0].key'] && !req.body['qkeys[0].target']) {
            k = req.body['qkeys[0].target'];
        }
        const [success2, key] = await Api_1.Roblox.Api.Helpers.Helpers.PersistentDataStores.GetHelpers.GetKeyOrEntryForScope(universeId, store, scope, k, req.query['type'] === 'standard' ? false : true);
        if (!success2)
            return res.status(500).send({
                errors: [
                    {
                        code: 0,
                        message: 'InternalServerError',
                    },
                ],
            });
        if (key === null) {
            return res.status(200).send({
                data: [],
            });
        }
        else {
            if (key.scope === '_')
                key.scope = '';
            return res.status(200).send({
                data: [
                    {
                        Key: {
                            Target: key.keyName,
                            Scope: key.scope,
                            Key: key.store,
                        },
                        Value: key.value.raw.toString(),
                    },
                ],
            });
        }
    },
};
