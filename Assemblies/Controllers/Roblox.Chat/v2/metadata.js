"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    method: 'all',
    func: (_req, res) => {
        return res.send({
            isChatEnabledByPrivacySetting: 1,
            languageForPrivacySettingUnavailable: 'Chat is currently unavailable',
            maxConversationTitleLength: 150,
            numberOfMembersForPartyChrome: 6,
            partyChromeDisplayTimeStampInterval: 300000,
            signalRDisconnectionResponseInMilliseconds: 3000,
            typingInChatFromSenderThrottleMs: 5000,
            typingInChatForReceiverExpirationMs: 8000,
            relativeValueToRecordUiPerformance: 0.0,
            isChatDataFromLocalStorageEnabled: false,
            chatDataFromLocalStorageExpirationSeconds: 30,
            isUsingCacheToLoadFriendsInfoEnabled: false,
            cachedDataFromLocalStorageExpirationMS: 30000,
            senderTypesForUnknownMessageTypeError: ['User'],
            isInvalidMessageTypeFallbackEnabled: false,
            isRespectingMessageTypeEnabled: true,
            validMessageTypesWhiteList: ['PlainText', 'Link'],
            shouldRespectConversationHasUnreadMessageToMarkAsRead: true,
            isVoiceChatForClientSideEnabled: false,
            isAliasChatForClientSideEnabled: true,
            isPlayTogetherForGameCardsEnabled: true,
            isRoactChatEnabled: true,
        });
    },
};
