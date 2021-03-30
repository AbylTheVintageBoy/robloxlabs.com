"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (req, res) => {
        res.contentType('application/xml;charset=utf-8');
        switch (req.query.method) {
            case 'IsFriendsWith':
                res.send('<Value Type="boolean">false</Value>');
                break;
            case 'IsBestFriendsWith':
                res.send('<Value Type="boolean">false</Value>');
                break;
            case 'IsInGroup':
                res.send('<Value Type="boolean">true</Value>');
                break;
            case 'GetGroupRank':
                res.send('<Value Type="integer">100</Value>');
                break;
            case 'GetGroupRole':
                res.send('');
                break;
        }
    },
};
