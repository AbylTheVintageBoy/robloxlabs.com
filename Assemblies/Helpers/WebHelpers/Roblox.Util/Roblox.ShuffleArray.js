"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShuffleArray = void 0;
const ShuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};
exports.ShuffleArray = ShuffleArray;
