"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIfPlaceIsRooted = void 0;
const CheckIfPlaceExists_1 = require("./CheckIfPlaceExists");
const GetPlaceFromId_1 = require("./GetPlaceFromId");
const CheckIfPlaceIsRooted = (placeId) => {
    if (!CheckIfPlaceExists_1.CheckIfPlaceExists(placeId))
        return false;
    const [success, place] = GetPlaceFromId_1.GetPlaceFromId(placeId);
    if (!success)
        return false;
    if (place.universeRootPlaceId !== placeId)
        return false;
    return true;
};
exports.CheckIfPlaceIsRooted = CheckIfPlaceIsRooted;
