/*
	FileName: clearCachedSessions.ts
	Written By: Nikita Nikolaevich Petko
	File Type: Module
	Description: Clears all sessions in /manifests/sessions on start

	All commits will be made on behalf of mfd-co to https://github.com/mfd-core/sitetest4.robloxlabs.com

	***

	Copyright 2015-2020 MFD

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

import fs from 'fs';
import { _dirname } from '../../Roblox.Constants/Roblox.Directories';

export const ClearCachedSessions = () => {
	return new Promise<void>((resolve, reject) => {
		try {
			fs.rmdirSync(_dirname + '\\Roblox.Manifest\\sessions', { recursive: true });
			fs.mkdirSync(_dirname + '\\Roblox.Manifest\\sessions');
			fs.rmdirSync(_dirname + '\\Roblox.Manifest\\csrf', { recursive: true });
			fs.mkdirSync(_dirname + '\\Roblox.Manifest\\csrf');
			resolve();
		} catch (err: unknown) {
			reject(err);
		}
	});
};