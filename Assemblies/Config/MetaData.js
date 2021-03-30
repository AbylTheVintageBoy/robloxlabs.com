"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    UsePages: true,
    PageOpts: {
        etag: false,
        redirect: true,
        lastModified: false,
        setHeaders: (res) => {
            res.set('x-powered-by', 'ASP.NET');
            res.set('server', 'Amazon S3');
        },
    },
    UseEndpoints: true,
    UseRouting: true,
};
