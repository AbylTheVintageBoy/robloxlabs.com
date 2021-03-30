"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (req, res) => {
        console.log(req.body);
        res.status(200).send({
            Name: "nsg's place",
            Description: 'FUCK',
            RootPlace: 1,
            StudioAccessToApisAllowed: true,
            CurrentUserHasEditPermissions: true,
            UniverseAvatarType: 'Black',
        });
    },
};
