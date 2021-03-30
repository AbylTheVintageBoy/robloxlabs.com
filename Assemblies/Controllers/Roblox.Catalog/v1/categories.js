"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            Featured: 0,
            All: 1,
            Collectibles: 2,
            Clothing: 3,
            BodyParts: 4,
            Gear: 5,
            Models: 6,
            Plugins: 7,
            Decals: 8,
            Audio: 9,
            Meshes: 10,
            Accessories: 11,
            AvatarAnimations: 12,
            CommunityCreations: 13,
            Video: 14,
            Recommended: 15,
        });
    },
};
