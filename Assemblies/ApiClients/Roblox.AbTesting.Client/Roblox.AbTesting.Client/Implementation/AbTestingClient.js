"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbTestingClient = void 0;
const axios_1 = __importDefault(require("axios"));
const Api_1 = require("../../../../Data/Keys/Api");
const BaseUrl_1 = require("../../../../Data/Client/BaseUrl");
const Roblox_Util_FastLog_1 = require("../../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
const https_1 = __importDefault(require("https"));
Roblox_Util_FastLog_1.DYNAMIC_LOGGROUP('Tasks');
var AbTestingClient;
(function (AbTestingClient) {
    async function TryEnrollToExperiments(enrollments, UserAuthToken, requireSecureUri) {
        return new Promise((resumeFunction) => {
            const AbTestingApiEnrollToExperimentsUrl = `${(requireSecureUri ? BaseUrl_1.BaseURL.GetSecureBaseURL() : BaseUrl_1.BaseURL.GetBaseURL()).replace(/www/, 'abtesting.api')}/v1/experiments/enroll-to?ApiKey=${Api_1.ApiKeys.AbTesingApi}`;
            const postData = { data: enrollments };
            axios_1.default.post(AbTestingApiEnrollToExperimentsUrl, postData, {
                headers: {
                    Cookie: `.ROBLOSECURITY=${UserAuthToken}`,
                },
                httpsAgent: new https_1.default.Agent({ rejectUnauthorized: false }),
            })
                .then((Response) => {
                resumeFunction([true, JSON.stringify(Response.data), Response.status]);
            })
                .catch((Err) => {
                if (!Err.response) {
                    const message = new Error(`Error enrolling to experiments for the user: ${UserAuthToken || 'NoUser'}. Roblox.Http.ServiceClient.ConnectionException: An error has occurred with your request.
	Status code: None (None)
	Url: ${(requireSecureUri ? BaseUrl_1.BaseURL.GetSecureBaseURL() : BaseUrl_1.BaseURL.GetBaseURL()).replace(/www/, 'abtesting.api')}/v1/experiments/enrollto
	Response Machine Id: RA-WEB114
	Error code: ${Err.message}`).stack;
                    Roblox_Util_FastLog_1.FASTLOGS(Roblox_Util_FastLog_1.DFLog('Tasks'), '[DFLog::Tasks] %s', message);
                    return resumeFunction([false, message, 500]);
                }
                resumeFunction([false, Err.response.statusText, Err.response.status]);
            });
        });
    }
    AbTestingClient.TryEnrollToExperiments = TryEnrollToExperiments;
})(AbTestingClient = exports.AbTestingClient || (exports.AbTestingClient = {}));
