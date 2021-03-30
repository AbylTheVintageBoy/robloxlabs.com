"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceClient = void 0;
const querystring_1 = __importDefault(require("querystring"));
const HttpRequestMethodEnum_1 = require("./HttpRequestMethodEnum");
const axios_1 = __importDefault(require("axios"));
const https_1 = __importDefault(require("https"));
const BaseUrl_1 = require("../../Data/Client/BaseUrl");
const Version_1 = require("../../Data/Client/Version");
const Roblox_Util_FastLog_1 = require("../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
Roblox_Util_FastLog_1.DYNAMIC_FASTSTRINGVARIABLE('GlobalConfigRA', 'RA-14');
Roblox_Util_FastLog_1.DYNAMIC_FASTSTRINGVARIABLE('ProxiedIP', '208.223.313.3');
var ServiceClient;
(function (ServiceClient) {
    class HttpClient {
        constructor(request) {
            this.request = request;
        }
        async execute() {
            return new Promise((resumeFunction) => {
                const parsedQs = querystring_1.default.stringify(this.request.QueryString);
                const requestUrl = `${this.request.Url}?${parsedQs}`;
                let requestMethod = 'GET';
                switch (this.request.Method) {
                    case HttpRequestMethodEnum_1.HttpRequestMethodEnum.GET:
                        requestMethod = 'GET';
                        break;
                    case HttpRequestMethodEnum_1.HttpRequestMethodEnum.POST:
                        requestMethod = 'POST';
                        break;
                    case HttpRequestMethodEnum_1.HttpRequestMethodEnum.DELETE:
                        requestMethod = 'DELETE';
                        break;
                    case HttpRequestMethodEnum_1.HttpRequestMethodEnum.HEAD:
                        requestMethod = 'HEAD';
                        break;
                    case HttpRequestMethodEnum_1.HttpRequestMethodEnum.OPTIONS:
                        requestMethod = 'OPTIONS';
                        break;
                    case HttpRequestMethodEnum_1.HttpRequestMethodEnum.PATCH:
                        requestMethod = 'PATCH';
                        break;
                    case HttpRequestMethodEnum_1.HttpRequestMethodEnum.PUT:
                        requestMethod = 'PUT';
                        break;
                }
                axios_1.default.request({
                    url: requestUrl,
                    method: requestMethod,
                    httpsAgent: new https_1.default.Agent({ rejectUnauthorized: false }),
                    headers: {
                        ...this.request.AdditionalHeaders,
                        'User-Agent': `Roblox/ApiServiceClientAspNet 4.8.4210.0 (${BaseUrl_1.BaseURL.GetSecureBaseURL()} v${Version_1.Version.GetVersion()})`,
                        'Roblox-Machine-Id': Roblox_Util_FastLog_1.DFString('GlobalConfigRA'),
                        'Roblox-Grid-Proxied-IP': Roblox_Util_FastLog_1.DFString('ProxiedIP'),
                        'X-Roblox-ChannelType': 'Roblox.Http.ServiceClient.Channel.Main',
                        'X-Roblox-Is-ApiRequest': 'True',
                    },
                    data: this.request.Payload,
                })
                    .then((response) => {
                    resumeFunction([
                        true,
                        {
                            Url: requestUrl,
                            Method: this.request.Method,
                            ResponsePayload: response.data,
                            Headers: response.headers,
                            StatusCode: response.status,
                            StatusMessage: response.statusText,
                        },
                    ]);
                })
                    .catch((err) => {
                    if (err.response) {
                        return resumeFunction([
                            false,
                            {
                                Url: requestUrl,
                                Method: this.request.Method,
                                ResponsePayload: err.response.data,
                                Headers: err.response.headers,
                                StatusCode: err.response.status,
                                StatusMessage: err.response.statusText,
                            },
                        ]);
                    }
                    return resumeFunction([
                        false,
                        {
                            Url: requestUrl,
                            Method: this.request.Method,
                            ResponsePayload: null,
                            Headers: null,
                            StatusCode: 0,
                            StatusMessage: 'ConnectionError',
                        },
                    ]);
                });
            });
        }
    }
    ServiceClient.HttpClient = HttpClient;
})(ServiceClient = exports.ServiceClient || (exports.ServiceClient = {}));
