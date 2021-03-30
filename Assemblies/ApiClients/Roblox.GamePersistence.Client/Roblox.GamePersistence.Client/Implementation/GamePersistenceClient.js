"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePersistenceClient = void 0;
const Api_1 = require("../../../../Data/Keys/Api");
const BaseUrl_1 = require("../../../../Data/Client/BaseUrl");
const HttpClient_1 = require("../../../../Http/ServiceClient/HttpClient");
const HttpRequestMethodEnum_1 = require("../../../../Http/ServiceClient/HttpRequestMethodEnum");
var GamePersistenceClient;
(function (GamePersistenceClient) {
    async function TryFetchTheDataStoresForThisUniverse(universeId, UserAuthToken, requireSecureUri) {
        return new Promise(async (resumeFunction) => {
            const GamePersistenceGetTheStoresForThisUniverseUrl = `${(requireSecureUri
                ? BaseUrl_1.BaseURL.GetSecureBaseURL()
                : BaseUrl_1.BaseURL.GetBaseURL()).replace(/www/, 'gamepersistence.api')}/v4/datastores/fetch-this-universe`;
            const postData = { universeId };
            const Client = new HttpClient_1.ServiceClient.HttpClient({
                Url: GamePersistenceGetTheStoresForThisUniverseUrl,
                QueryString: {
                    ApiKey: Api_1.ApiKeys.GamePersistenceApi,
                    'Content-Type': 'application/json',
                },
                AdditionalHeaders: { Cookie: `.ROBLOSECURITY=${UserAuthToken || ''}` },
                Payload: JSON.stringify(postData),
                Method: HttpRequestMethodEnum_1.HttpRequestMethodEnum.POST,
            });
            const [Success, Response] = await Client.execute();
            return resumeFunction([Success, Response.ResponsePayload, Response.StatusCode]);
        });
    }
    GamePersistenceClient.TryFetchTheDataStoresForThisUniverse = TryFetchTheDataStoresForThisUniverse;
})(GamePersistenceClient = exports.GamePersistenceClient || (exports.GamePersistenceClient = {}));
