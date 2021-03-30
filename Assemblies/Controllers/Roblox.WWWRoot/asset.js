"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const Directories_1 = require("../../Helpers/Constants/Directories");
dotenv_1.default.config({ path: Directories_1._dirname + '\\.env' });
exports.default = {
    method: 'all',
    func: (req, res) => {
        if (req.query.id === '1') {
            res.redirect('http://static.sitetest4.robloxlabs.com/rbx/1.rbxlx');
            return;
        }
        res.redirect('https://assetdelivery.roblox.com/v1' + req.url);
    },
};
