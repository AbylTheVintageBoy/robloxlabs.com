"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseUrl_1 = require("../Data/Client/BaseUrl");
const Api_1 = require("../Data/Keys/Api");
const Roblox_Util_FastLog_1 = require("../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
const HttpClient_1 = require("../Http/ServiceClient/HttpClient");
const HttpException_1 = require("../Http/ServiceClient/HttpException");
const HttpRequestMethodEnum_1 = require("../Http/ServiceClient/HttpRequestMethodEnum");
const sslkeylog_1 = __importDefault(require("sslkeylog"));
sslkeylog_1.default.hookAll();
Roblox_Util_FastLog_1.DYNAMIC_LOGVARIABLE('Debug', 7);
(async () => {
    const TestUrl = `${BaseUrl_1.BaseURL.GetSecureBaseURL().replace(/www/, 'apis')}/echo-server/test-qs`;
    const postData = { Data: [{ Test: 4, STest: 'TestString' }] };
    const Client = new HttpClient_1.ServiceClient.HttpClient({
        Url: TestUrl,
        QueryString: {
            ApiKey: Api_1.ApiKeys.TestApi,
        },
        AdditionalHeaders: { Cookie: `.ROBLOSECURITY=;`, 'Content-Type': 'application/json' },
        Payload: JSON.stringify(postData),
        Method: HttpRequestMethodEnum_1.HttpRequestMethodEnum.POST,
    });
    const [Success, Response] = await Client.execute();
    if (Success) {
        Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.DFLog('Debug'), '[DFLog::Debug] %s', JSON.stringify(Response));
    }
    else if (!Success) {
        return Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.DFLog('Debug'), '[DFLog::Debug] %s', (new HttpException_1.ServiceClientExceptions.HttpException(TestUrl, 'Failure on TestClient', Response.StatusCode, 'Funny', 'Test Failure').fetch()));
    }
})();
