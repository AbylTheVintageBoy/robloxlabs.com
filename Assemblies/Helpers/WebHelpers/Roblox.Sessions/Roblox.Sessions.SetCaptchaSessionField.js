"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetCaptchaSessionField = void 0;
const fs_1 = __importDefault(require("fs"));
const Directories_1 = require("../../Constants/Directories");
const SetCaptchaSessionField = (sessionId, field, value, concatToString, pushIfArray, popIfUndefined, index, spliceIfIndex, createIfDoesntExist) => {
    let session;
    try {
        session = JSON.parse(fs_1.default.readFileSync(Directories_1._dirname + `\\Manifest\\sessions\\${sessionId}.json`, { encoding: 'utf-8' }));
    }
    catch (e) {
        return e;
    }
    if (session) {
        if (!createIfDoesntExist && session[field] !== null && !session[field])
            return "The field doesn't exist";
        else {
            if (Array.isArray(session[field])) {
                if (spliceIfIndex && index && value === undefined) {
                    session[field].splice(index, 1);
                    if (!session[field])
                        session[field] = [];
                }
                else if (pushIfArray && !popIfUndefined) {
                    session[field].push(value);
                    if (!session[field])
                        session[field] = [];
                }
                else if (popIfUndefined && value === undefined) {
                    session[field].pop();
                    if (!session[field])
                        session[field] = [];
                }
                else {
                    session[field] = value;
                    if (!session[field])
                        session[field] = [];
                }
            }
            else if (typeof session[field] === 'string' && concatToString) {
                session[field] += value.toString();
            }
            else {
                session[field] = value;
            }
        }
    }
    return fs_1.default.writeFileSync(Directories_1._dirname + `\\Manifest\\sessions\\${sessionId}.json`, JSON.stringify(session, undefined, 4), {
        encoding: 'utf-8',
    });
};
exports.SetCaptchaSessionField = SetCaptchaSessionField;
