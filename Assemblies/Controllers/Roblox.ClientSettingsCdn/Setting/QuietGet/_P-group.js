"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../../../../Api");
exports.default = {
    method: 'all',
    func: (_req, res) => {
        const s = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetAllSettings('Client');
        const settings = new Map(Object.entries(s));
        const obj = {};
        settings.forEach((v, k) => {
            if (k === 'FFlag') {
                const fflag = new Map(Object.entries(s[k]));
                fflag.forEach((v1, k1) => {
                    obj['FFlag' + k1] = v1 === true ? 'True' : 'False';
                });
            }
            else if (k === 'DFFlag') {
                const dfflag = new Map(Object.entries(s[k]));
                dfflag.forEach((v1, k1) => {
                    obj['DFFlag' + k1] = v1 === true ? 'True' : 'False';
                });
            }
            else if (k === 'SFFlag') {
                const sfflag = new Map(Object.entries(s[k]));
                sfflag.forEach((v1, k1) => {
                    obj['SFFlag' + k1] = v1 === true ? 'True' : 'False';
                });
            }
            else if (k === 'FLog') {
                const flog = new Map(Object.entries(s[k]));
                flog.forEach((v1, k1) => {
                    obj['FLog' + k1] = v1.toString();
                });
            }
            else if (k === 'FInt') {
                const fint = new Map(Object.entries(s[k]));
                fint.forEach((v1, k1) => {
                    obj['FInt' + k1] = v1.toString();
                });
            }
            else if (k === 'DFInt') {
                const dfint = new Map(Object.entries(s[k]));
                dfint.forEach((v1, k1) => {
                    obj['DFInt' + k1] = v1.toString();
                });
            }
            else if (k === 'FString') {
                const fstring = new Map(Object.entries(s[k]));
                fstring.forEach((v1, k1) => {
                    obj['FString' + k1] = v1;
                });
            }
            else if (k === 'DFString') {
                const dfstring = new Map(Object.entries(s[k]));
                dfstring.forEach((v1, k1) => {
                    obj['DFString' + k1] = v1;
                });
            }
            else if (k === 'FVariable') {
                const fvariable = new Map(Object.entries(s[k]));
                fvariable.forEach((v1, k1) => {
                    obj[k1] = v1;
                });
            }
            else if (k === 'FPFilter') {
                const fpfilter = new Map(Object.entries(s[k]));
                fpfilter.forEach((v1, k1) => {
                    const kk = 'FStringPlaceFilter_' + k1;
                    if (typeof v1.Value === 'boolean') {
                        let v = v1.Value ? 'True;' : 'False;';
                        let it = 0;
                        v1.PlaceIds.forEach((vvx) => {
                            it++;
                            v += vvx.toString() + (it !== v1.PlaceIds.length ? ';' : '');
                        });
                        obj[kk] = v;
                    }
                    else if (typeof v1.Value === 'number') {
                        let v = v1.Value.toString() + ';';
                        let it = 0;
                        v1.PlaceIds.forEach((vvx) => {
                            it++;
                            v += vvx.toString() + (it !== v1.PlaceIds.length ? ';' : '');
                        });
                        obj[kk] = v;
                    }
                    else {
                        let v = v1.Value + ';';
                        let it = 0;
                        v1.PlaceIds.forEach((vvx) => {
                            it++;
                            v += vvx.toString() + (it !== v1.PlaceIds.length ? ';' : '');
                        });
                        obj[kk] = v;
                    }
                });
            }
            else {
                const v2 = new Map(Object.entries(s[k]));
                v2.forEach((v1, k1) => {
                    obj[k1] = v1;
                });
            }
        });
        res.send(obj);
    },
};
