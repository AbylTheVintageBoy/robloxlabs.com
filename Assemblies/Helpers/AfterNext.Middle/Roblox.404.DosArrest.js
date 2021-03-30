"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Directories_1 = require("../Constants/Directories");
exports.default = (req, res) => {
    res.status(req.method === 'OPTIONS' ? 200 : 404).sendFile(Directories_1._dirname + '\\ErrorViews\\DOSArrest\\DOSArrest.404.html');
};
