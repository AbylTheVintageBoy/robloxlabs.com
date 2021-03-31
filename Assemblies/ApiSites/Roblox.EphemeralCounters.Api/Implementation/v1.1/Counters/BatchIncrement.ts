/*
	FileName: e.png.ts
	Written By: Nikita Nikolaevich Petko
	File Type: Module
	Description: Analytics, for ecsv2

	All commits will be made on behalf of mfd-co to https://github.com/mfd-core/sitetest4.robloxlabs.com

	NOTICE DO NOT PUT CSRF PROTECTION ON THIS!

	***

	Copyright 2006-2021 ROBLOX

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	https://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.

	***
*/

import { FASTLOGS, FLog, LOGGROUP } from '../../../././../../Helpers/WebHelpers/Roblox.Util/Roblox.Util.FastLog';
import {EphemeralCountersService} from '../../../././../../ApiServices/Roblox.EphemeralCounters.Service/Roblox.EphemeralCounters.Service/EphemeralCountersService'
LOGGROUP('EphemeralCounters');

export default {
	method: 'all',
	func: (_req: any, res): void => {
        const bdy = _req.body;
        FASTLOGS(FLog['EphemeralCounters'], '[FLog::EphemeralCounters] %s', bdy);
        console.log(bdy);
        const jsn = JSON.parse(bdy)
        const keys = Object.keys(jsn)
        return res.status(404);
        for (const key in keys)  {
            const a = key;
            const b = jsn[key];
            FASTLOGS(FLog['EphemeralCounters'], '[FLog::EphemeralCounters] %s', a);
            FASTLOGS(FLog['EphemeralCounters'], '[FLog::EphemeralCounters] %s', b);
            EphemeralCountersService.HandleIncrementCounter(a,b, res)

        }
        
	},
};
