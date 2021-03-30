"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const Api_1 = require("../../../../../../../Api");
const Get_1 = require("../../../../../../../Helpers/WebHelpers/Points/Get");
const Roblox_Util_FastLog_1 = require("../../../../../../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog");
dotenv_1.default.config({ path: Api_1.Roblox.Api.Constants.RobloxDirectories.__iBaseDirectory + '\\.env' });
Roblox_Util_FastLog_1.FASTFLAG('RequireGlobalHTTPS');
exports.default = {
    method: 'All',
    func: async (request, response) => {
        if (request.method === 'OPTIONS')
            return response.status(200).send();
        if (Roblox_Util_FastLog_1.FFlag['RequireGlobalHTTPS'] && request.protocol !== 'https') {
            return response.status(403).send({
                errors: [
                    {
                        code: 0,
                        message: 'HTTPS Required.',
                    }
                ],
            });
        }
        let uId = parseInt(request.params['universeId']);
        let usId = parseInt(request.params['userId']);
        if (isNaN(usId)) {
            return response.status(404).send({
                errors: [
                    {
                        code: 1,
                        message: 'The universe is invalid.',
                    }
                ],
            });
        }
        else if (isNaN(uId)) {
            return response.status(404).send({
                errors: [
                    {
                        code: 2,
                        message: 'The user is invalid.',
                    }
                ],
            });
        }
        let e = {};
        const [success, result] = await Get_1.GetPoints(uId, usId);
        if (success) {
            e["allTimeScore"] = result;
        }
        else {
            e["allTimeScore"] = 0;
        }
        return response.status(200).send(JSON.stringify(e));
    },
};
