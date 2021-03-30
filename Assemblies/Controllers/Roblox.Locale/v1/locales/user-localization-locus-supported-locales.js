"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            signupAndLogin: {
                id: 1,
                locale: 'en_us',
                name: 'English(US)',
                nativeName: 'English',
                language: { id: 41, name: 'English', nativeName: 'English', languageCode: 'en' },
            },
            generalExperience: {
                id: 1,
                locale: 'en_us',
                name: 'English(US)',
                nativeName: 'English',
                language: { id: 41, name: 'English', nativeName: 'English', languageCode: 'en' },
            },
            ugc: {
                id: 1,
                locale: 'en_us',
                name: 'English(US)',
                nativeName: 'English',
                language: { id: 41, name: 'English', nativeName: 'English', languageCode: 'en' },
            },
        });
    },
};
