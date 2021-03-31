/*
	FileName: clearCachedSessions.ts
	Written By: Nikita Nikolaevich Petko
	File Type: Module
	Description: Clears all sessions in /manifests/sessions on start

	All commits will be made on behalf of mfd-co to https://github.com/mfd-core/sitetest4.robloxlabs.com

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

import fs from 'fs';
import { __baseDirName } from '../../Constants/Directories';

export const ClearCachedSessions = () => {
	return new Promise<void>((resolve, reject) => {
		try {
			fs.rmdirSync(__baseDirName + '\\DataBase\\sessions', { recursive: true });
			fs.mkdirSync(__baseDirName + '\\DataBase\\sessions');
			fs.rmdirSync(__baseDirName + '\\DataBase\\csrf', { recursive: true });
			fs.mkdirSync(__baseDirName + '\\DataBase\\csrf');
			fs.rmdirSync(__baseDirName + '\\DataBase\\pages', { recursive: true });
			fs.mkdirSync(__baseDirName + '\\DataBase\\pages');
			resolve();
		} catch (err: unknown) {
			reject(err);
		}
	});
};
