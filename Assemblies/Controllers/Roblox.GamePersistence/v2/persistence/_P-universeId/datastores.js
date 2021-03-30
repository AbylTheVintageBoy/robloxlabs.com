"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../../../../../Api");
const Roblox_Util_FastLog_1 = require("../../../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
const RobloxPages_1 = require("../../../../../Data/Pages/RobloxPages");
const GetRootPlaceIdFromUniverseId_1 = require("../../../../../Helpers/WebHelpers/Universes/GetRootPlaceIdFromUniverseId");
const GetPersistentStoresForUniverse_1 = require("../../../../../Helpers/WebHelpers/PersistentDataStores/GetHelpers/GetPersistentStoresForUniverse");
const enc_base64_1 = __importDefault(require("crypto-js/enc-base64"));
const crypto_js_1 = __importDefault(require("crypto-js"));
Roblox_Util_FastLog_1.DYNAMIC_LOGVARIABLE('DataStoresV2', 7);
Roblox_Util_FastLog_1.DYNAMIC_FASTFLAGVARIABLE('DataStoresV2EnabledForTheWorld', false);
Roblox_Util_FastLog_1.DYNAMIC_FASTINTVARIABLE('DataStoreV2RolloutPercentage', 0);
Roblox_Util_FastLog_1.DYNAMIC_FASTINTVARIABLE('DataStoreApiRefreshRolloutPercentage', 0);
exports.default = {
    method: 'all',
    func: async (request, response) => {
        if (request.method !== 'GET') {
            Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.DFLog('DataStoreV2'), '[DFLog::DataStoresV2] We got a bad request method, it was %s when GET was expected!', request.method);
            return response.status(405).send({
                errors: [
                    {
                        code: 0,
                        message: `The requested resource does not support http method '${request.method}'.`,
                    },
                ],
            });
        }
        let cookie = request.headers.cookie;
        if (cookie === undefined)
            cookie = '';
        cookie = cookie.split(';').find((AuthToken) => {
            return AuthToken.startsWith(' .ROBLOSECURITY') || AuthToken.startsWith('.ROBLOSECURITY');
        });
        if (cookie)
            cookie = cookie.split('=')[1];
        const universeId = parseInt(request.params['universeId']);
        if (isNaN(universeId) || (request.params['universeId'] || 'test').match(/[a-zA-Z]+/g)) {
            Roblox_Util_FastLog_1.FASTLOG(Roblox_Util_FastLog_1.DFLog('DataStoresV2'), '[DFLog::DataStoresV2] We got an Null universe, god damn');
            return response.status(400).send({
                errors: [
                    {
                        code: 0,
                        message: 'The request is invalid.',
                    },
                ],
            });
        }
        if (!Roblox_Util_FastLog_1.DFFlag('DataStoresV2EnabledForTheWorld') && Roblox_Util_FastLog_1.DFInt('DataStoreV2RolloutPercentage') < 100) {
            const [success, PlaceId] = GetRootPlaceIdFromUniverseId_1.GetRootPlaceIdFromUniverseId(universeId);
            if (!success || PlaceId === null) {
                Roblox_Util_FastLog_1.FASTLOG(Roblox_Util_FastLog_1.DFLog('DataStoresV2'), '[DFLog::DataStoresV2] We got an Null place, that means the universe did not exist');
                return response.status(403).send({
                    errors: [
                        {
                            code: 26,
                            message: 'The universe is not allowed to access the endpoint.',
                            retryable: Roblox_Util_FastLog_1.DFInt('DataStoreApiRefreshRolloutPercentage') >= 100,
                        },
                    ],
                });
            }
            if (!Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetPlaceIdInPlaceFilter('DataStoresV2Enabled', PlaceId, 'Client')) {
                Roblox_Util_FastLog_1.FASTLOG1(Roblox_Util_FastLog_1.DFLog('DataStoresV2'), '[DFLog::DataStoresV2] The place %d was not in the filter, bruh', PlaceId);
                return response.status(403).send({
                    errors: [
                        {
                            code: 26,
                            message: 'The universe is not allowed to access the endpoint.',
                            retryable: Roblox_Util_FastLog_1.DFInt('DataStoreApiRefreshRolloutPercentage') >= 100,
                        },
                    ],
                });
            }
        }
        let PageLength = parseInt(request.query['maxItemsToReturn']);
        const DataStorePrefix = request.query['prefix'] || '';
        const PageCursor = request.query.PageCursor || '';
        const exclusiveStartKey = request.query['exclusiveStartKey'] || '';
        let Cursor = RobloxPages_1.Pages.GetPageCursorByKey(`${universeId}_${PageCursor.split('+').join('+').split('=').join('_')}`);
        if (Cursor.length === 0) {
            Cursor = enc_base64_1.default.stringify(crypto_js_1.default.MD5(universeId.toString()));
            RobloxPages_1.Pages.SetPageByKey(`${universeId}_${Cursor.split('+').join('+').split('=').join('_')}`, Cursor);
        }
        let DataStores = [];
        let lastReturnedKey = '';
        let CanPush = true;
        let c = '';
        const [Succes, Stores] = await GetPersistentStoresForUniverse_1.GetPersistentStoresForUniverse(universeId);
        Stores.sort();
        if (Succes && Stores) {
            Stores.forEach((store, storeNumber) => {
                if (!isNaN(PageLength) && PageLength > 0 && storeNumber >= PageLength) {
                    CanPush = false;
                    if (exclusiveStartKey && exclusiveStartKey.replace(' ', '+') === c) {
                        CanPush = true;
                        DataStores = [];
                        PageLength += PageLength;
                    }
                    lastReturnedKey = c;
                    return;
                }
                if (DataStorePrefix !== null && DataStorePrefix.length !== 0) {
                    if (store.storeName.startsWith(DataStorePrefix)) {
                        if (CanPush)
                            DataStores.push({
                                Name: store.storeName,
                                CreatedTime: store.created,
                                UpdatedTime: store.lastUpdated,
                                VersioningEnabled: Roblox_Util_FastLog_1.DFFlag('DataStoreVersioning'),
                            });
                        c = `beta_${store.storeName}_s+${Cursor}`;
                        return;
                    }
                }
                if (CanPush)
                    DataStores.push({
                        Name: store.storeName,
                        CreatedTime: store.created,
                        UpdatedTime: store.lastUpdated,
                        VersioningEnabled: Roblox_Util_FastLog_1.DFFlag('DataStoreVersioning'),
                    });
                c = `beta_${store.storeName}_s+${Cursor}`;
            });
        }
        response.send({ datastores: DataStores.sort(), lastReturnedKey: lastReturnedKey });
    },
};
