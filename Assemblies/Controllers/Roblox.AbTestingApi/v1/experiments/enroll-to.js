"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbTestingService_1 = require("../../../../ApiServices/Roblox.AbTesting.Service/Roblox.AbTesting.Service/Implementation/AbTestingService");
exports.default = {
    method: 'All',
    func: (request, response) => {
        if (JSON.stringify(request.body) === '{}')
            return response.status(400).send({
                message: new Error(`AbTesting with ApiKey ${request.query.ApiKey || '00000000-0000-0000-0000-00000000000'} failed because the request was invalid`).stack,
            });
        if (request.body && (!request.headers['content-type'] || request.headers['content-type'].length === 0))
            return response.status(415).send({
                message: "The request contains an entity body but no Content-Type header. The inferred media type 'application/octet-stream' is not supported for this resource.",
            });
        let cookie = request.headers.cookie;
        if (cookie === undefined)
            cookie = '';
        cookie = cookie.split(';').find((AuthToken) => {
            return AuthToken.startsWith(' .ROBLOSECURITY') || AuthToken.startsWith('.ROBLOSECURITY');
        });
        if (cookie)
            cookie = cookie.split('=')[1];
        AbTestingService_1.AbTestingService.HandleEnrollTo(request.body.data || [], response);
    },
};
