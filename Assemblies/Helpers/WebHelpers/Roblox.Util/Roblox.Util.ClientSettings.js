"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSettings = exports.Group = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
var Group;
(function (Group) {
    Group[Group["FVariable"] = 0] = "FVariable";
    Group[Group["FLog"] = 1] = "FLog";
    Group[Group["DFLog"] = 2] = "DFLog";
    Group[Group["SFLog"] = 3] = "SFLog";
    Group[Group["FFlag"] = 4] = "FFlag";
    Group[Group["DFFlag"] = 5] = "DFFlag";
    Group[Group["SFFlag"] = 6] = "SFFlag";
    Group[Group["FInt"] = 7] = "FInt";
    Group[Group["DFInt"] = 8] = "DFInt";
    Group[Group["SFInt"] = 9] = "SFInt";
    Group[Group["FString"] = 10] = "FString";
    Group[Group["DFString"] = 11] = "DFString";
    Group[Group["SFString"] = 12] = "SFString";
    Group[Group["FPFilter"] = 13] = "FPFilter";
    Group[Group["FSettings"] = 14] = "FSettings";
    Group[Group["UExperiment"] = 15] = "UExperiment";
    Group[Group["BTExperiment"] = 16] = "BTExperiment";
    Group[Group["SExperiment"] = 17] = "SExperiment";
    Group[Group["All"] = 18] = "All";
})(Group = exports.Group || (exports.Group = {}));
var ClientSettings;
(function (ClientSettings) {
    ClientSettings.GetSettings = (settingsType, settingsGroup = 'Web') => {
        const settings = JSON.parse(fs_1.default.readFileSync(Directories_1._dirname + '\\Default\\Roblox.Settings.json', 'ascii'));
        if (settingsType || settingsType === 0 || settingsType === Group.FFlag) {
            switch (settingsType) {
                case Group.FVariable:
                    return settings[settingsGroup]['FVariable'];
                case Group.FLog:
                    return settings[settingsGroup]['FLog'];
                case Group.SFLog:
                    return settings[settingsGroup]['SFLog'];
                case Group.DFLog:
                    return settings[settingsGroup]['DFLog'];
                case Group.FFlag:
                    return settings[settingsGroup]['FFlag'];
                case Group.DFFlag:
                    return settings[settingsGroup]['DFFlag'];
                case Group.SFFlag:
                    return settings[settingsGroup]['SFFlag'];
                case Group.FInt:
                    return settings[settingsGroup]['FInt'];
                case Group.DFInt:
                    return settings[settingsGroup]['DFInt'];
                case Group.SFInt:
                    return settings[settingsGroup]['SFInt'];
                case Group.FString:
                    return settings[settingsGroup]['FString'];
                case Group.DFString:
                    return settings[settingsGroup]['DFString'];
                case Group.SFString:
                    return settings[settingsGroup]['SFString'];
                case Group.FPFilter:
                    return settings[settingsGroup]['FPFilter'];
                case Group.FSettings:
                    return settings['FSettings'];
                case Group.UExperiment:
                    return settings[settingsGroup]['UExperiment'];
                case Group.BTExperiment:
                    return settings[settingsGroup]['BTExperiment'];
                case Group.SExperiment:
                    return settings[settingsGroup]['SExperiment'];
                case Group.All:
                    return settings[settingsGroup];
                default:
                    return new Error(`Settings Group '${settingsType}' doesn't exist.`);
            }
        }
    };
    ClientSettings.GetFVariables = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.FVariable, ctx);
    };
    ClientSettings.GetFLogs = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.FLog, ctx);
    };
    ClientSettings.GetDFLogs = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.DFLog, ctx);
    };
    ClientSettings.GetFFlags = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.FFlag, ctx);
    };
    ClientSettings.GetDFFlags = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.DFFlag, ctx);
    };
    ClientSettings.GetSFFlags = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.SFFlag, ctx);
    };
    ClientSettings.GetFInts = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.FInt, ctx);
    };
    ClientSettings.GetDFInts = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.DFInt, ctx);
    };
    ClientSettings.GetSFInts = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.SFInt, ctx);
    };
    ClientSettings.GetFStrings = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.FString, ctx);
    };
    ClientSettings.GetDFStrings = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.DFString, ctx);
    };
    ClientSettings.GetSFStrings = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.SFString, ctx);
    };
    ClientSettings.GetFPFilters = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.FPFilter, ctx);
    };
    ClientSettings.GetFSettings = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.FSettings, ctx);
    };
    ClientSettings.GetUserExperiments = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.UExperiment, ctx);
    };
    ClientSettings.GetBrowserTrackerExperiments = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.BTExperiment, ctx);
    };
    ClientSettings.GetSharedExperiments = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.SExperiment, ctx);
    };
    ClientSettings.GetSFLogs = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.SFLog, ctx);
    };
    ClientSettings.GetAllSettings = (ctx = 'Web') => {
        return ClientSettings.GetSettings(Group.All, ctx);
    };
    ClientSettings.GetPlaceIdInPlaceFilter = (key, placeId, ctx = 'Web') => {
        const FPFilter = ClientSettings.GetFPFilters(ctx);
        if (FPFilter === undefined)
            return false;
        const keyFilter = FPFilter[key];
        if (keyFilter === undefined)
            return false;
        let isInFilter = false;
        keyFilter['PlaceIds'].forEach((id) => {
            if (id === placeId)
                isInFilter = true;
        });
        return isInFilter;
    };
})(ClientSettings = exports.ClientSettings || (exports.ClientSettings = {}));
