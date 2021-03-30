"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pages = void 0;
const Api_1 = require("../../Api");
const fs_1 = __importDefault(require("fs"));
var Pages;
(function (Pages) {
    function GetPageCursorByKey(Key) {
        const Directory = `${Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory}\\Manifest\\pages\\${Key}.json`;
        if (!fs_1.default.existsSync(Directory))
            return '';
        let Data = fs_1.default.readFileSync(Directory, { encoding: 'utf-8' });
        Data = JSON.parse(Data);
        if (!Data || !Data['Cursor'])
            return '';
        return Data['Cursor'];
    }
    Pages.GetPageCursorByKey = GetPageCursorByKey;
    function GetCursorLimitByKey(Key) {
        const Directory = `${Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory}\\Manifest\\pages\\${Key}.json`;
        if (!fs_1.default.existsSync(Directory))
            return 0;
        let Data = fs_1.default.readFileSync(Directory, { encoding: 'utf-8' });
        Data = JSON.parse(Data);
        if (!Data || !Data['Limit'])
            return 0;
        return Data['Limit'];
    }
    Pages.GetCursorLimitByKey = GetCursorLimitByKey;
    function SetPageByKey(Key, Cursor, Limit = 0, OverwriteCursor = true) {
        const localCursor = GetPageCursorByKey(Key);
        if (localCursor.length !== 0 && GetCursorLimitByKey(Key) !== Limit)
            return localCursor;
        const Directory = `${Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory}\\Manifest\\pages\\${Key}.json`;
        const Data = {
            Cursor: localCursor.length !== 0 && !OverwriteCursor ? localCursor : Cursor,
            Limit,
        };
        fs_1.default.writeFileSync(Directory, JSON.stringify(Data, undefined, 4));
        return Cursor;
    }
    Pages.SetPageByKey = SetPageByKey;
})(Pages = exports.Pages || (exports.Pages = {}));
