"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROBLOX_SignalR_Config_Helper = void 0;
const MapWebsockets_1 = __importDefault(require("../../../Global.Helpers/MapWebsockets"));
const Directories_1 = require("../../Constants/Directories");
const ROBLOX_SignalR_Config_Helper = async (httpserver, httpsServer, dir, apiName) => {
    await MapWebsockets_1.default(httpserver, httpsServer, {
        path: Directories_1._dirname + dir,
        shouldHandleUpgrade: true,
        apiName: apiName,
        logSetups: true,
    });
};
exports.ROBLOX_SignalR_Config_Helper = ROBLOX_SignalR_Config_Helper;
