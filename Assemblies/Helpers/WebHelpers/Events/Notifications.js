"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const evtss = new Map();
exports.default = {
    subscribe: (key, evt) => {
        evtss.set(key, evt);
    },
    unsubscribe: (key) => {
        evtss.delete(key);
    },
    push: (id, cid, userid) => {
        evtss.forEach((v, k) => {
            if (k === id)
                v.emit('message', cid, userid);
        });
    },
};
