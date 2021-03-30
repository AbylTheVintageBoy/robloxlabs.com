"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            enableDefaultClothingMessage: false,
            isAvatarScaleEmbeddedInTab: true,
            isBodyTypeScaleOutOfTab: true,
            scaleHeightIncrement: 0.05,
            scaleWidthIncrement: 0.05,
            scaleHeadIncrement: 0.05,
            scaleProportionIncrement: 0.05,
            scaleBodyTypeIncrement: 0.05,
            supportProportionAndBodyType: true,
            showDefaultClothingMessageOnPageLoad: false,
            areThreeDeeThumbsEnabled: true,
        });
    },
};
