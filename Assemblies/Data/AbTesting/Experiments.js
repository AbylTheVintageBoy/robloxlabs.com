"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experiments = exports.Setting = exports.SharedExperiments = exports.BrowserTrackerExperiments = exports.UserExperiments = void 0;
const Api_1 = require("../../Api");
const ExperimentStatusEnum_1 = require("../../Platform/AbTesting/ExperimentStatusEnum");
exports.UserExperiments = {};
exports.BrowserTrackerExperiments = {};
exports.SharedExperiments = {};
exports.Setting = {
    done: false,
};
var Experiments;
(function (Experiments) {
    function InternalInitializeExperimentsFromManifest() {
        exports.UserExperiments = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetUserExperiments();
        exports.BrowserTrackerExperiments = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetBrowserTrackerExperiments();
        exports.SharedExperiments = Api_1.Roblox.Api.Helpers.Util.ClientSettings.GetSharedExperiments();
        exports.Setting.done = true;
        return;
    }
    function GetExperimentStatus(enrollment) {
        if (!exports.Setting.done) {
            InternalInitializeExperimentsFromManifest();
        }
        return {
            ExperimentName: enrollment.ExperimentName,
            SubjectTargetId: enrollment.SubjectTargetId,
            SubjectType: enrollment.SubjectType,
            Status: ExperimentStatusEnum_1.ExperimentStatusEnum.Inactive,
            Variation: null,
        };
    }
    Experiments.GetExperimentStatus = GetExperimentStatus;
})(Experiments = exports.Experiments || (exports.Experiments = {}));
