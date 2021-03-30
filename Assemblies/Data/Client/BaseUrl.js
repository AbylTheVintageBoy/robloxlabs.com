"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseURL = void 0;
const Api_1 = require("../../Api");
var BaseURL;
(function (BaseURL) {
    function GetBaseURL() {
        return 'http://' + Api_1.Roblox.Api.Constants.URLS.ROBLOX_WWW;
    }
    BaseURL.GetBaseURL = GetBaseURL;
    function GetSecureBaseURL() {
        return 'https://' + Api_1.Roblox.Api.Constants.URLS.ROBLOX_WWW;
    }
    BaseURL.GetSecureBaseURL = GetSecureBaseURL;
})(BaseURL = exports.BaseURL || (exports.BaseURL = {}));
