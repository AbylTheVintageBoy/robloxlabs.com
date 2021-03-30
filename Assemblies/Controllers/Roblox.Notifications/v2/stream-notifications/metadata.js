"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            bannerDismissTimeSpan: 5000,
            signalRDisconnectionResponseInMilliseconds: 3000,
            canLaunchGameFromGameUpdate: true,
        });
    },
};
