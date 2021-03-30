"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbTestingService = void 0;
const Experiments_1 = require("../../../../Data/AbTesting/Experiments");
const ExperimentStatusEnum_1 = require("../../../../Platform/AbTesting/ExperimentStatusEnum");
const SubjectTypeEnum_1 = require("../../../../Platform/AbTesting/SubjectTypeEnum");
var AbTestingService;
(function (AbTestingService) {
    function HandleEnrollTo(enrollments, response) {
        const experimentStatuses = [];
        enrollments.forEach((enrollment) => {
            if (enrollment) {
                const experiment_status = Experiments_1.Experiments.GetExperimentStatus(enrollment);
                const experiment = {
                    ExperimentName: experiment_status.ExperimentName,
                    SubjectTargetId: experiment_status.SubjectTargetId,
                    SubjectType: '',
                    Status: '',
                    Variation: experiment_status.Variation,
                };
                switch (experiment_status.Status) {
                    case ExperimentStatusEnum_1.ExperimentStatusEnum.Enrolled:
                        experiment.Status = 'Enrolled';
                        break;
                    case ExperimentStatusEnum_1.ExperimentStatusEnum.Inactive:
                        experiment.Status = 'Inactive';
                        break;
                    case ExperimentStatusEnum_1.ExperimentStatusEnum.NoExperiment:
                        experiment.Status = 'NoExperiment';
                        break;
                }
                switch (experiment_status.SubjectType) {
                    case SubjectTypeEnum_1.SubjectTypeEnum.User:
                        experiment.SubjectType = 'User';
                        break;
                    case SubjectTypeEnum_1.SubjectTypeEnum.BrowserTracker:
                        experiment.SubjectType = 'BrowserTracker';
                        break;
                }
                experimentStatuses.push(experiment);
            }
        });
        return response.send({ data: experimentStatuses });
    }
    AbTestingService.HandleEnrollTo = HandleEnrollTo;
})(AbTestingService = exports.AbTestingService || (exports.AbTestingService = {}));
