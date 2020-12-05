"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const _dirname = 'C:\\Users\\Padraig\\Git\\Mfd\\Web\\mfd.com\\lib';
const MapControllers = (app, opts) => {
    return new Promise((r) => {
        let controllers;
        try {
            controllers = fs_1.default.readdirSync((opts !== undefined ? opts.path : _dirname + '\\controllers') || _dirname + '\\controllers');
        }
        catch (err) {
            return console.error(err);
        }
        controllers.forEach((v) => {
            if (!v.includes('.js.map') || !v.includes('.d.ts')) {
                let map;
                try {
                    map = require(((opts !== undefined ? opts.path + '\\' : _dirname + '\\controllers\\') || _dirname + '\\controllers\\') +
                        v);
                }
                catch (err) {
                    return console.error(err);
                }
                let dir;
                let func;
                let method;
                if (map.default) {
                    if (map.default.dir)
                        dir = map.default.dir;
                    else
                        return;
                    if (map.default.func)
                        func = map.default.func;
                    else
                        return;
                    if (map.default.method)
                        method = map.default.method.toLowerCase();
                    else
                        return;
                    try {
                        if (method === 'get') {
                            if (opts.logSetups)
                                console.log(`Mapping GET ${(opts.apiName ? 'https://' + opts.apiName : '') + dir}`);
                            app.get(dir, func);
                        }
                        else if (method === 'head') {
                            if (opts.logSetups)
                                console.log(`Mapping HEAD ${(opts.apiName ? 'https://' + opts.apiName : '') + dir}`);
                            app.head(dir, func);
                        }
                        else if (method === 'post') {
                            if (opts.logSetups)
                                console.log(`Mapping POST ${(opts.apiName ? 'https://' + opts.apiName : '') + dir}`);
                            app.post(dir, func);
                        }
                        else if (method === 'put') {
                            if (opts.logSetups)
                                console.log(`Mapping PUT ${(opts.apiName ? 'https://' + opts.apiName : '') + dir}`);
                            app.put(dir, func);
                        }
                        else if (method === 'delete') {
                            if (opts.logSetups)
                                console.log(`Mapping DELETE ${(opts.apiName ? 'https://' + opts.apiName : '') + dir}`);
                            app.delete(dir, func);
                        }
                        else if (method === 'connect') {
                            if (opts.logSetups)
                                console.log(`Mapping CONNECT ${(opts.apiName ? 'https://' + opts.apiName : '') + dir}`);
                            app.connect(dir, func);
                        }
                        else if (method === 'options') {
                            if (opts.logSetups)
                                console.log(`Mapping OPTIONS ${(opts.apiName ? 'https://' + opts.apiName : '') + dir}`);
                            app.options(dir, func);
                        }
                        else if (method === 'trace') {
                            if (opts.logSetups)
                                console.log(`Mapping TRACE ${(opts.apiName ? 'https://' + opts.apiName : '') + dir}`);
                            app.trace(dir, func);
                        }
                        else if (method === 'patch') {
                            if (opts.logSetups)
                                console.log(`Mapping PATCH ${(opts.apiName ? 'https://' + opts.apiName : '') + dir}`);
                            app.patch(dir, func);
                        }
                        else if (method === 'all') {
                            if (opts.logSetups)
                                console.log(`Mapping ALL ${(opts.apiName ? 'https://' + opts.apiName : '') + dir}`);
                            app.all(dir, func);
                        }
                        else {
                            throw 'Method not supported';
                        }
                    }
                    catch (err) {
                        return console.error(err);
                    }
                }
                else {
                    throw new Error(`${v} had no default export.`);
                }
            }
        });
        r();
    });
};
exports.default = MapControllers;