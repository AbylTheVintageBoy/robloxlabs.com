"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrGetXsrfSession = void 0;
const Roblox_Util_ClientSettings_1 = require("../Roblox.Util/Roblox.Util.ClientSettings");
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const Roblox_Sessions_CreateCsrfSessionFile_1 = require("./Roblox.Sessions.CreateCsrfSessionFile");
const Roblox_Sessions_GetCsrfSession_1 = require("./Roblox.Sessions.GetCsrfSession");
const CheckIfAuthTokenExists_1 = require("../Auth/CheckIfAuthTokenExists");
const FString = Roblox_Util_ClientSettings_1.ClientSettings.GetSettings(Roblox_Util_ClientSettings_1.Group.FString);
const CreateOrGetXsrfSession = (AuthToken = '', ip = '', token = '', response, isXsrfEndpoint) => {
    const DFFlag = Roblox_Util_ClientSettings_1.ClientSettings.GetSettings(Roblox_Util_ClientSettings_1.Group.DFFlag, 'Web');
    if (!DFFlag['IsCSRFV2Enabled'])
        return true;
    if (DFFlag['CanCSRFV2AdminKeyBeUsed'] && token === FString['CSRFV2HardcodedKey'])
        return true;
    if (DFFlag['IsCSRFV2Hardcoded'] && token !== FString['CSRFV2HardcodedKey']) {
        response
            .status(isXsrfEndpoint ? 200 : 403)
            .header({
            'access-control-expose-headers': 'X-CSRF-TOKEN, API-TRANSFER',
            'x-csrf-token': FString['CSRFV2HardcodedKey'],
            'api-transfer': 'Expose-Hardcoded-Session-Token#433',
        })
            .send({ success: isXsrfEndpoint, message: 'Token Validation Failed' });
        return false;
    }
    else if (DFFlag['IsCSRFV2Hardcoded'] && token === FString['CSRFV2HardcodedKey']) {
        return true;
    }
    if (ip)
        ip = ip.split('.').join('-');
    const csrfSessions = fs_1.default.readdirSync(Directories_1._dirname + '\\Manifest\\csrf');
    let hasFoundSession = false;
    let isBasedOnIpAndAuthToken = DFFlag['IsCSRFV2BasedOnIpAddressAndAuthenticationId'];
    let sessionFile = '';
    if (!CheckIfAuthTokenExists_1.CheckIfAuthTokenExists(AuthToken))
        AuthToken = undefined;
    csrfSessions.forEach((file) => {
        if (DFFlag['IsCSRFV2BasedOnAuthenticationId']) {
            if (file.split('.')[0] === AuthToken) {
                sessionFile = file;
                hasFoundSession = true;
                return;
            }
        }
        else if (DFFlag['IsCSRFV2BasedOnIPAddress']) {
            if (file.split('.')[0] === ip) {
                sessionFile = file;
                hasFoundSession = true;
                return;
            }
        }
        else if (DFFlag['IsCSRFV2BasedOnIpAddressAndAuthenticationId']) {
            if (ip && !AuthToken) {
                if (file.split('.')[0] === ip) {
                    sessionFile = file;
                    hasFoundSession = true;
                    return;
                }
            }
            else if (AuthToken && ip) {
                if (file.split('.')[0] === AuthToken) {
                    sessionFile = file;
                    hasFoundSession = true;
                    return;
                }
                isBasedOnIpAndAuthToken = true;
            }
        }
    });
    let hasFoundSession2 = true;
    if (!hasFoundSession) {
        if (isBasedOnIpAndAuthToken) {
            if (csrfSessions.length > 0) {
                csrfSessions.forEach((session) => {
                    if (session.split('.')[0] !== ip) {
                        hasFoundSession2 = false;
                    }
                    else {
                        sessionFile = session;
                        hasFoundSession2 = true;
                        return;
                    }
                });
            }
            else {
                hasFoundSession2 = false;
            }
        }
        else {
            if (ip && !AuthToken) {
                const t = Roblox_Sessions_CreateCsrfSessionFile_1.CreateCsrfSessionFile(ip);
                response.statusMessage = isXsrfEndpoint ? 'OK' : FString['CSRFV2FailedResponseStatusText'];
                response
                    .status(isXsrfEndpoint ? 200 : 403)
                    .header({
                    'access-control-expose-headers': 'X-CSRF-TOKEN',
                    'x-csrf-token': t,
                })
                    .send({ success: isXsrfEndpoint, message: isXsrfEndpoint ? 'OK' : FString['CSRFV2FailedResponseStatusText'] });
                return false;
            }
            else if (ip && AuthToken) {
                const t = Roblox_Sessions_CreateCsrfSessionFile_1.CreateCsrfSessionFile(AuthToken);
                response.statusMessage = isXsrfEndpoint ? 'OK' : FString['CSRFV2FailedResponseStatusText'];
                response
                    .status(isXsrfEndpoint ? 200 : 403)
                    .header({
                    'access-control-expose-headers': 'X-CSRF-TOKEN',
                    'x-csrf-token': t,
                })
                    .send({ success: isXsrfEndpoint, message: isXsrfEndpoint ? 'OK' : FString['CSRFV2FailedResponseStatusText'] });
                return false;
            }
        }
    }
    if (!hasFoundSession2) {
        if (ip && !AuthToken) {
            const t = Roblox_Sessions_CreateCsrfSessionFile_1.CreateCsrfSessionFile(ip);
            response.statusMessage = isXsrfEndpoint ? 'OK' : FString['CSRFV2FailedResponseStatusText'];
            response
                .status(isXsrfEndpoint ? 200 : 403)
                .header({
                'access-control-expose-headers': 'X-CSRF-TOKEN',
                'x-csrf-token': t,
            })
                .send({ success: isXsrfEndpoint, message: isXsrfEndpoint ? 'OK' : FString['CSRFV2FailedResponseStatusText'] });
            return false;
        }
        else if (ip && AuthToken) {
            const t = Roblox_Sessions_CreateCsrfSessionFile_1.CreateCsrfSessionFile(AuthToken);
            response.statusMessage = isXsrfEndpoint ? 'OK' : FString['CSRFV2FailedResponseStatusText'];
            response
                .status(isXsrfEndpoint ? 200 : 403)
                .header({
                'access-control-expose-headers': 'X-CSRF-TOKEN',
                'x-csrf-token': t,
            })
                .send({ success: isXsrfEndpoint, message: isXsrfEndpoint ? 'OK' : FString['CSRFV2FailedResponseStatusText'] });
            return false;
        }
    }
    if (sessionFile) {
        if (Roblox_Sessions_GetCsrfSession_1.GetCsrfSession(sessionFile)['token'] !== token) {
            response.statusMessage = isXsrfEndpoint ? 'OK' : FString['CSRFV2FailedResponseStatusText'];
            response
                .status(isXsrfEndpoint ? 200 : 403)
                .header({
                'access-control-expose-headers': 'X-CSRF-TOKEN',
                'x-csrf-token': Roblox_Sessions_GetCsrfSession_1.GetCsrfSession(sessionFile)['token'],
            })
                .send({ success: isXsrfEndpoint, message: isXsrfEndpoint ? 'OK' : FString['CSRFV2FailedResponseStatusText'] });
            return false;
        }
        return true;
    }
    return true;
};
exports.CreateOrGetXsrfSession = CreateOrGetXsrfSession;
