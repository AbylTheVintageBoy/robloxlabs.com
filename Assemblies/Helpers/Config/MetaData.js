"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directories_1 = require("../Constants/Directories");
const MetaData_1 = __importDefault(require("../../Config/MetaData"));
exports.default = (app, PagesDir, EndpointsDir, apiName, errorpage, fileListings) => {
    return {
        app: app,
        ...MetaData_1.default,
        PagesOpts: {
            path: Directories_1._dirname + PagesDir,
        },
        EndpointOpts: {
            path: Directories_1._dirname + EndpointsDir,
            logSetups: true,
            apiName: apiName,
        },
        errorpage: errorpage,
        fileListings,
    };
};
