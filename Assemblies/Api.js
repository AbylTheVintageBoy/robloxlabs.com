"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roblox = void 0;
const IStartupSDK_1 = require("./SDK/IStartupSDK");
const CheckIfAuthTokenExists_1 = require("./Helpers/WebHelpers/Auth/CheckIfAuthTokenExists");
const CheckIfAuthTokenExists_2 = require("./Helpers/WebHelpers/Auth/CheckIfAuthTokenExists");
const DEPRECATED_GetImageHashes_1 = require("./Helpers/WebHelpers/Auth/DEPRECATED_GetImageHashes");
const DEPRECATED_GetManifest_1 = require("./Helpers/WebHelpers/DataBase/DEPRECATED_GetManifest");
const DEPRECATED_GetRegisteredUsers_1 = require("./Helpers/WebHelpers/DataBase/DEPRECATED_GetRegisteredUsers");
const DEPRECATED_GetSessions_1 = require("./Helpers/WebHelpers/DataBase/DEPRECATED_GetSessions");
const DEPRECATED_WriteToManifest_1 = require("./Helpers/WebHelpers/DataBase/DEPRECATED_WriteToManifest");
const GetKeyOrEntryForScope_1 = require("./Helpers/WebHelpers/PersistentDataStores/GetHelpers/GetKeyOrEntryForScope");
const GetKeysOrEntriesForScope_1 = require("./Helpers/WebHelpers/PersistentDataStores/GetHelpers/GetKeysOrEntriesForScope");
const GetPersistentStoreForUniverse_1 = require("./Helpers/WebHelpers/PersistentDataStores/GetHelpers/GetPersistentStoreForUniverse");
const GetPersistentStoresForUniverse_1 = require("./Helpers/WebHelpers/PersistentDataStores/GetHelpers/GetPersistentStoresForUniverse");
const GetScopeForPersistentStore_1 = require("./Helpers/WebHelpers/PersistentDataStores/GetHelpers/GetScopeForPersistentStore");
const GetScopesForPersistentStore_1 = require("./Helpers/WebHelpers/PersistentDataStores/GetHelpers/GetScopesForPersistentStore");
const PurgeKeyFromScope_1 = require("./Helpers/WebHelpers/PersistentDataStores/PurgeHelpers/PurgeKeyFromScope");
const PurgeScopeFromPersistentStore_1 = require("./Helpers/WebHelpers/PersistentDataStores/PurgeHelpers/PurgeScopeFromPersistentStore");
const PurgeUniverse_1 = require("./Helpers/WebHelpers/PersistentDataStores/PurgeHelpers/PurgeUniverse");
const PurgeUniversePersistentStore_1 = require("./Helpers/WebHelpers/PersistentDataStores/PurgeHelpers/PurgeUniversePersistentStore");
const PushKeyToPersistentStore_1 = require("./Helpers/WebHelpers/PersistentDataStores/SetHelpers/PushKeyToPersistentStore");
const PushPersistentStoreToUniverse_1 = require("./Helpers/WebHelpers/PersistentDataStores/SetHelpers/PushPersistentStoreToUniverse");
const PushUniverseToDB_1 = require("./Helpers/WebHelpers/PersistentDataStores/SetHelpers/PushUniverseToDB");
const GetPlaceFromId_1 = require("./Helpers/WebHelpers/Universes/GetPlaceFromId");
const CheckIfUniverseExists_1 = require("./Helpers/WebHelpers/Universes/CheckIfUniverseExists");
const CheckIfPlaceExists_1 = require("./Helpers/WebHelpers/Universes/CheckIfPlaceExists");
const CheckIfPlaceIsRooted_1 = require("./Helpers/WebHelpers/Universes/CheckIfPlaceIsRooted");
const GetUniverseIdFromPlaceId_1 = require("./Helpers/WebHelpers/Universes/GetUniverseIdFromPlaceId");
const GetUniverseFromPlaceId_1 = require("./Helpers/WebHelpers/Universes/GetUniverseFromPlaceId");
const GetRootPlaceIdFromUniverseId_1 = require("./Helpers/WebHelpers/Universes/GetRootPlaceIdFromUniverseId");
const GetRootPlaceFromUniverseId_1 = require("./Helpers/WebHelpers/Universes/GetRootPlaceFromUniverseId");
const Roblox_Sessions_ClearCachedSessions_1 = require("./Helpers/WebHelpers/Roblox.Sessions/Roblox.Sessions.ClearCachedSessions");
const Roblox_Sessions_CreateCaptchaBlobSessionAfter403_1 = require("./Helpers/WebHelpers/Roblox.Sessions/Roblox.Sessions.CreateCaptchaBlobSessionAfter403");
const Roblox_Sessions_SetCaptchaSessionField_1 = require("./Helpers/WebHelpers/Roblox.Sessions/Roblox.Sessions.SetCaptchaSessionField");
const Roblox_Sessions_GetCsrfSession_1 = require("./Helpers/WebHelpers/Roblox.Sessions/Roblox.Sessions.GetCsrfSession");
const Roblox_Sessions_DeleteCsrfSession_1 = require("./Helpers/WebHelpers/Roblox.Sessions/Roblox.Sessions.DeleteCsrfSession");
const Roblox_Sessions_DeleteCaptchaSession_1 = require("./Helpers/WebHelpers/Roblox.Sessions/Roblox.Sessions.DeleteCaptchaSession");
const Roblox_Sessions_CreateOrGetXsrfSession_1 = require("./Helpers/WebHelpers/Roblox.Sessions/Roblox.Sessions.CreateOrGetXsrfSession");
const Roblox_Sessions_CreateCsrfSessionFile_1 = require("./Helpers/WebHelpers/Roblox.Sessions/Roblox.Sessions.CreateCsrfSessionFile");
const Roblox_Sessions_CreateCaptchaSessionBlob_1 = require("./Helpers/WebHelpers/Roblox.Sessions/Roblox.Sessions.CreateCaptchaSessionBlob");
const Roblox_Util_ClientSettings_1 = require("./Helpers/WebHelpers/Roblox.Util/Roblox.Util.ClientSettings");
const Roblox_Server_Starter_1 = require("./Helpers/WebHelpers/Roblox.Web.Util/Roblox.Server.Starter");
const Roblox_SignalR_WebSocket_Helper_1 = require("./Helpers/WebHelpers/Roblox.Web.Util/Roblox.SignalR.WebSocket.Helper");
const Default_OutBound_Headers_1 = __importDefault(require("./Helpers/Constants/Default.OutBound.Headers"));
const Directories_1 = require("./Helpers/Constants/Directories");
const Urls_1 = __importDefault(require("./Helpers/Constants/Urls"));
const Roblox_ShuffleArray_1 = require("./Helpers/WebHelpers/Roblox.Util/Roblox.ShuffleArray");
const AfterNext_Middle_1 = require("./Helpers/AfterNext.Middle");
const SiteTest4_Global_Middleware_1 = require("./Helpers/BeforeNext.Middle/SiteTest4.Global.Middleware");
const MetaData_1 = __importDefault(require("./Helpers/Config/MetaData"));
const SimulPingMiddleWare_1 = require("./Helpers/BeforeNext.Middle/SimulPingMiddleWare");
const AbTestingMiddleWare_1 = require("./Helpers/BeforeNext.Middle/AbTestingMiddleWare");
const GamePersistenceMiddleWare_1 = require("./Helpers/BeforeNext.Middle/GamePersistenceMiddleWare");
const AdminWebsiteMiddleWare_1 = require("./Helpers/BeforeNext.Middle/AdminWebsiteMiddleWare");
const Kestrel_1 = require("./Helpers/BeforeNext.Middle/Kestrel");
var Roblox;
(function (Roblox) {
    let Api;
    (function (Api) {
        let Library;
        (function (Library) {
            Library.IStartup = IStartupSDK_1.IStartup;
        })(Library = Api.Library || (Api.Library = {}));
        let Helpers;
        (function (Helpers_1) {
            let AfterNext;
            (function (AfterNext) {
                let Middle;
                (function (Middle) {
                    Middle.API = AfterNext_Middle_1.ROBLOX_404_API;
                    Middle.CSS = AfterNext_Middle_1.ROBLOX_404_CSS;
                    Middle.EPHEMERAL_COUNTERS_API = AfterNext_Middle_1.ROBLOX_404_EPHEMERAL_COUNTERS;
                    Middle.IMAGES = AfterNext_Middle_1.ROBLOX_404_IMAGES;
                    Middle.JS = AfterNext_Middle_1.ROBLOX_404_JS;
                    Middle.SETUP_CDN = AfterNext_Middle_1.ROBLOX_404_SETUP_CDN;
                    Middle.STATIC_CDN = AfterNext_Middle_1.ROBLOX_404_STATIC_CDN;
                    Middle.DEPRECATED_TEMPORARY_IMAGES = AfterNext_Middle_1.DEPRECATED_404_TEMPORARY_IMAGES;
                    Middle.WWW = AfterNext_Middle_1.ROBLOX_404_WWW;
                })(Middle = AfterNext.Middle || (AfterNext.Middle = {}));
            })(AfterNext = Helpers_1.AfterNext || (Helpers_1.AfterNext = {}));
            let BeforeNext;
            (function (BeforeNext) {
                let Middle;
                (function (Middle) {
                    Middle.GLOBAL = SiteTest4_Global_Middleware_1.GlobalMiddleware;
                    Middle.SIMULPONG = SimulPingMiddleWare_1.SimulPingMiddleware;
                    Middle.ABTESTING = AbTestingMiddleWare_1.AbTestingMiddleWare;
                    Middle.GAMEPERSISTENCE = GamePersistenceMiddleWare_1.GamePersistenceMiddleware;
                    Middle.ADMINWEBSITE = AdminWebsiteMiddleWare_1.AdminWebsiteMiddleWare;
                    Middle.KESTREL = Kestrel_1.Kestrel;
                })(Middle = BeforeNext.Middle || (BeforeNext.Middle = {}));
            })(BeforeNext = Helpers_1.BeforeNext || (Helpers_1.BeforeNext = {}));
            let Config;
            (function (Config) {
                Config.CONFIG = MetaData_1.default;
            })(Config = Helpers_1.Config || (Helpers_1.Config = {}));
            let Helpers;
            (function (Helpers) {
                let Auth;
                (function (Auth) {
                    Auth.CheckIfAuthTokenExists = CheckIfAuthTokenExists_1.CheckIfAuthTokenExists;
                    Auth.GetImageHashes = DEPRECATED_GetImageHashes_1.GetImageHashes;
                    Auth.CheckIfAuthTokenExistsAndReturnOwner = CheckIfAuthTokenExists_2.CheckIfAuthTokenExistsAndReturnOwner;
                })(Auth = Helpers.Auth || (Helpers.Auth = {}));
                let DB;
                (function (DB) {
                    DB.GetManifests = DEPRECATED_GetManifest_1.GetManifests;
                    DB.GetRegisteredUsers = DEPRECATED_GetRegisteredUsers_1.GetRegisteredUsers;
                    DB.GetSessions = DEPRECATED_GetSessions_1.GetSessions;
                    DB.WriteToManifest = DEPRECATED_WriteToManifest_1.WriteToManifest;
                })(DB = Helpers.DB || (Helpers.DB = {}));
                let PersistentDataStores;
                (function (PersistentDataStores) {
                    let GetHelpers;
                    (function (GetHelpers) {
                        GetHelpers.GetKeyOrEntryForScope = GetKeyOrEntryForScope_1.GetKeyOrEntryForScope;
                        GetHelpers.GetKeysOrEntriesForScope = GetKeysOrEntriesForScope_1.GetKeysOrEntriesForScope;
                        GetHelpers.GetPersistentStoreForUniverse = GetPersistentStoreForUniverse_1.GetPersistentStoreForUniverse;
                        GetHelpers.GetPersistentStoresForUniverse = GetPersistentStoresForUniverse_1.GetPersistentStoresForUniverse;
                        GetHelpers.GetScopeForPersistentStore = GetScopeForPersistentStore_1.GetScopeForPersistentStore;
                        GetHelpers.GetScopesForPersistentStore = GetScopesForPersistentStore_1.GetScopesForPersistentStore;
                    })(GetHelpers = PersistentDataStores.GetHelpers || (PersistentDataStores.GetHelpers = {}));
                    let PurgeHelpers;
                    (function (PurgeHelpers) {
                        PurgeHelpers.PurgeKeyFromScope = PurgeKeyFromScope_1.PurgeKeyFromScope;
                        PurgeHelpers.PurgeScopeFromPersistentStore = PurgeScopeFromPersistentStore_1.PurgeScopeFromPersistentStore;
                        PurgeHelpers.PurgeUniverse = PurgeUniverse_1.PurgeUniverse;
                        PurgeHelpers.PurgeUniversePersistentStore = PurgeUniversePersistentStore_1.PurgeUniversePersistentStore;
                    })(PurgeHelpers = PersistentDataStores.PurgeHelpers || (PersistentDataStores.PurgeHelpers = {}));
                    let SetHelpers;
                    (function (SetHelpers) {
                        SetHelpers.PushKeyToPersistentStore = PushKeyToPersistentStore_1.PushKeyToPersistentStore;
                        SetHelpers.PushPersistentStoreToUniverse = PushPersistentStoreToUniverse_1.PushPersistentStoreToUniverse;
                        SetHelpers.WriteUniverse = PushUniverseToDB_1.WriteUniverse;
                    })(SetHelpers = PersistentDataStores.SetHelpers || (PersistentDataStores.SetHelpers = {}));
                })(PersistentDataStores = Helpers.PersistentDataStores || (Helpers.PersistentDataStores = {}));
                let Places;
                (function (Places) {
                    Places.GetPlaceFromId = GetPlaceFromId_1.GetPlaceFromId;
                    Places.CheckIfUniverseExists = CheckIfUniverseExists_1.CheckIfUniverseExists;
                    Places.CheckIfPlaceExists = CheckIfPlaceExists_1.CheckIfPlaceExists;
                    Places.CheckIfPlaceIsRooted = CheckIfPlaceIsRooted_1.CheckIfPlaceIsRooted;
                    Places.GetUniverseIdFromPlaceId = GetUniverseIdFromPlaceId_1.GetUniverseIdFromPlaceId;
                    Places.GetUniverseFromPlaceId = GetUniverseFromPlaceId_1.GetUniverseFromPlaceId;
                    Places.GetRootPlaceIdFromUniverseId = GetRootPlaceIdFromUniverseId_1.GetRootPlaceIdFromUniverseId;
                    Places.GetRootPlaceFromUniverseId = GetRootPlaceFromUniverseId_1.GetRootPlaceFromUniverseId;
                })(Places = Helpers.Places || (Helpers.Places = {}));
                let Sessions;
                (function (Sessions) {
                    Sessions.ClearCachedSessions = Roblox_Sessions_ClearCachedSessions_1.ClearCachedSessions;
                    Sessions.CreateCaptchaBlobSessionAfter403 = Roblox_Sessions_CreateCaptchaBlobSessionAfter403_1.CreateCaptchaBlobSessionAfter403;
                    Sessions.SetCaptchaSessiontField = Roblox_Sessions_SetCaptchaSessionField_1.SetCaptchaSessionField;
                    Sessions.GetCsrfSession = Roblox_Sessions_GetCsrfSession_1.GetCsrfSession;
                    Sessions.DeleteCsrfSession = Roblox_Sessions_DeleteCsrfSession_1.DeleteCsrfSession;
                    Sessions.DeleteCaptchaSession = Roblox_Sessions_DeleteCaptchaSession_1.DeleteCaptchaSession;
                    Sessions.CreateOrGetXsrfSession = Roblox_Sessions_CreateOrGetXsrfSession_1.CreateOrGetXsrfSession;
                    Sessions.CreateCsrfSessionFile = Roblox_Sessions_CreateCsrfSessionFile_1.CreateCsrfSessionFile;
                    Sessions.CreateCaptchaSessionBlob = Roblox_Sessions_CreateCaptchaSessionBlob_1.CreateCaptchaSessionBlob;
                })(Sessions = Helpers.Sessions || (Helpers.Sessions = {}));
            })(Helpers = Helpers_1.Helpers || (Helpers_1.Helpers = {}));
            let Util;
            (function (Util) {
                Util.ClientSettings = Roblox_Util_ClientSettings_1.ClientSettings;
                Util.ShuffleArray = Roblox_ShuffleArray_1.ShuffleArray;
            })(Util = Helpers_1.Util || (Helpers_1.Util = {}));
            let Web;
            (function (Web) {
                let Util;
                (function (Util) {
                    Util.ROBLOX_Starter = Roblox_Server_Starter_1.ROBLOX_Starter;
                    Util.ROBLOX_SignalR_Config_Helper = Roblox_SignalR_WebSocket_Helper_1.ROBLOX_SignalR_Config_Helper;
                })(Util = Web.Util || (Web.Util = {}));
            })(Web = Helpers_1.Web || (Helpers_1.Web = {}));
        })(Helpers = Api.Helpers || (Api.Helpers = {}));
        let Constants;
        (function (Constants) {
            Constants.OutboundHeaders = Default_OutBound_Headers_1.default;
            let RobloxDirectories;
            (function (RobloxDirectories) {
                RobloxDirectories.__iBaseDirectory = Directories_1._dirname;
                RobloxDirectories.__iSSLDirectory = Directories_1._sslname;
            })(RobloxDirectories = Constants.RobloxDirectories || (Constants.RobloxDirectories = {}));
            Constants.URLS = Urls_1.default;
        })(Constants = Api.Constants || (Api.Constants = {}));
    })(Api = Roblox.Api || (Roblox.Api = {}));
})(Roblox = exports.Roblox || (exports.Roblox = {}));
