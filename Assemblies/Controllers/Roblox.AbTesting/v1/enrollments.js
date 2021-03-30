"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const Api_1 = require("../../../Api");
const SubjectTypeEnum_1 = require("../../../Platform/AbTesting/SubjectTypeEnum");
const AbTestingRequestProcessor_1 = require("../../../Web/AbTesting/Roblox.Web.AbTesting/AbTestingRequestProcessor");
const UserModelBuildersClubMembershipTypeEnum_1 = require("../../../Platform/Membership/UserModelBuildersClubMembershipTypeEnum");
const Roblox_Util_FastLog_1 = require("../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
dotenv_1.default.config({ path: Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\.env' });
Roblox_Util_FastLog_1.FASTFLAG('RequireGlobalHTTPS');
exports.default = {
    method: 'All',
    func: async (request, response) => {
        if (request.method === 'OPTIONS')
            return response.status(200).send();
        if (Roblox_Util_FastLog_1.FFlag['RequireGlobalHTTPS'] && request.protocol !== 'https')
            return response.status(403).send({
                errors: [
                    {
                        code: 0,
                        message: 'HTTPS Required',
                    },
                ],
            });
        if (request.method !== 'POST')
            return response.status(405).send({
                errors: [
                    {
                        code: 0,
                        message: `The requested resource does not support http method '${request.method}'.`,
                    },
                ],
            });
        if (JSON.stringify(request.body) === '{}')
            return response.status(400).send({
                errors: [
                    {
                        code: 0,
                        message: 'BadRequest',
                    },
                ],
            });
        if (request.body && (!request.headers['content-type'] || request.headers['content-type'].length === 0))
            return response.status(415).send({
                errors: [
                    {
                        code: 0,
                        message: "The request contains an entity body but no Content-Type header. The inferred media type 'application/octet-stream' is not supported for this resource.",
                    },
                ],
            });
        let cookie = request.headers.cookie;
        if (cookie === undefined)
            cookie = '';
        cookie = cookie.split(';').find((AuthToken) => {
            return AuthToken.startsWith(' .ROBLOSECURITY') || AuthToken.startsWith('.ROBLOSECURITY');
        });
        if (cookie)
            cookie = cookie.split('=')[1];
        if (!Api_1.Roblox.Api.Helpers.Helpers.Sessions.CreateOrGetXsrfSession(cookie, request.ip, request.headers['x-csrf-token'], response, false))
            return;
        if (Array.isArray(request.body) && request.body.length === 0)
            return response.status(400).send({
                errors: [
                    {
                        code: 0,
                        message: 'BadRequest',
                    },
                ],
            });
        const experiments = [];
        let user = null;
        let browsertracker = null;
        let requestInvalid = false;
        if (Array.isArray(request.body))
            request.body.forEach((element) => {
                if (element.SubjectType !== undefined && element.SubjectTargetId !== undefined && element.ExperimentName !== undefined) {
                    if (isNaN(parseInt(element.SubjectTargetId.toString())))
                        requestInvalid = true;
                    if (element.SubjectType === SubjectTypeEnum_1.SubjectTypeEnum.User || element.SubjectType.toString().toLowerCase() === 'user') {
                        user = {};
                        user.UserId = parseInt(element.SubjectTargetId.toString());
                        user.SecurityToken = cookie;
                        user.UserName = '';
                        user.MembershipType = UserModelBuildersClubMembershipTypeEnum_1.UserModelBuildersClubMembershipTypeEnum.None;
                        experiments.push({ Name: element.ExperimentName, Type: SubjectTypeEnum_1.SubjectTypeEnum.User });
                    }
                    else if (element.SubjectType === SubjectTypeEnum_1.SubjectTypeEnum.BrowserTracker ||
                        element.SubjectType.toString().toLowerCase() === 'browsertracker') {
                        browsertracker = {};
                        browsertracker.BrowserTrackerId = parseInt(element.SubjectTargetId.toString());
                        browsertracker.IpAddress = request.ip;
                        experiments.push({ Name: element.ExperimentName, Type: SubjectTypeEnum_1.SubjectTypeEnum.BrowserTracker });
                    }
                }
            });
        if (requestInvalid)
            return response.status(400).send({
                errors: [
                    {
                        code: 0,
                        message: 'BadRequest',
                    },
                ],
            });
        const [successFull, message, code] = await AbTestingRequestProcessor_1.AbTestingRequestProcessor.TryEnrollToExperiments(experiments, user, browsertracker, request.secure && Roblox_Util_FastLog_1.FFlag['RequireGlobalHTTPS']);
        if (successFull && message) {
            response.send(JSON.parse(message));
        }
        else {
            response.status(code).send({ errors: [{ code: code, message: message }] });
        }
    },
};
