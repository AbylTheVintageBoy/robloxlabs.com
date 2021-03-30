"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchKeyFromObjectCaseInsensitive = void 0;
function FetchKeyFromObjectCaseInsensitive(object, key) {
    return object[Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase())];
}
exports.FetchKeyFromObjectCaseInsensitive = FetchKeyFromObjectCaseInsensitive;
