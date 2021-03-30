"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbTestingRequestProcessor = void 0;
const AbTestingClient_1 = require("../../../ApiClients/Roblox.AbTesting.Client/Roblox.AbTesting.Client/Implementation/AbTestingClient");
const SubjectTypeEnum_1 = require("../../../Platform/AbTesting/SubjectTypeEnum");
var AbTestingRequestProcessor;
(function (AbTestingRequestProcessor) {
    async function TryEnrollToExperiment(experimentName, user, browserTracker, requireSecureUri) {
        return new Promise(async (resumeFunction) => {
            const enrollments = [];
            if (user) {
                enrollments.push({
                    ExperimentName: experimentName,
                    SubjectTargetId: user.UserId,
                    SubjectType: SubjectTypeEnum_1.SubjectTypeEnum.User,
                });
            }
            if (browserTracker) {
                enrollments.push({
                    ExperimentName: experimentName,
                    SubjectTargetId: browserTracker.BrowserTrackerId,
                    SubjectType: SubjectTypeEnum_1.SubjectTypeEnum.BrowserTracker,
                });
            }
            const [WasRequestSuccessful, ResponseMessage] = await AbTestingClient_1.AbTestingClient.TryEnrollToExperiments(enrollments, user.SecurityToken, requireSecureUri);
            resumeFunction([WasRequestSuccessful, ResponseMessage]);
        });
    }
    AbTestingRequestProcessor.TryEnrollToExperiment = TryEnrollToExperiment;
    async function TryEnrollToExperiments(experiments, user, browserTracker, requireSecureUri) {
        return new Promise(async (resumeFunction) => {
            const enrollments = [];
            experiments.forEach((experiment) => {
                if (user && experiment.Type === SubjectTypeEnum_1.SubjectTypeEnum.User) {
                    enrollments.push({
                        ExperimentName: experiment.Name,
                        SubjectTargetId: user.UserId,
                        SubjectType: SubjectTypeEnum_1.SubjectTypeEnum.User,
                    });
                }
                if (browserTracker && experiment.Type === SubjectTypeEnum_1.SubjectTypeEnum.BrowserTracker) {
                    enrollments.push({
                        ExperimentName: experiment.Name,
                        SubjectTargetId: browserTracker.BrowserTrackerId,
                        SubjectType: SubjectTypeEnum_1.SubjectTypeEnum.BrowserTracker,
                    });
                }
            });
            const [WasRequestSuccessful, ResponseMessage, code] = await AbTestingClient_1.AbTestingClient.TryEnrollToExperiments(enrollments, user ? user.SecurityToken : null, requireSecureUri);
            resumeFunction([WasRequestSuccessful, ResponseMessage, code]);
        });
    }
    AbTestingRequestProcessor.TryEnrollToExperiments = TryEnrollToExperiments;
})(AbTestingRequestProcessor = exports.AbTestingRequestProcessor || (exports.AbTestingRequestProcessor = {}));
