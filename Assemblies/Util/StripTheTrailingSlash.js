"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripTheTrailingSlash = void 0;
function StripTheTrailingSlash(str) {
    return str.replace(/\/$/, '');
}
exports.StripTheTrailingSlash = StripTheTrailingSlash;
