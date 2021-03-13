/*
	FileName: LoadPlaceInfo.ashx.ts
	Written By: Nikita Nikolaevich Petko
	File Type: Module
	Description: Load Place info script
			
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

export default {
	method: 'all',
	func: (_req, res): void => {
		return res.send({
			'2': 3,
			'3': 9,
			'8': 11,
			'10': 6,
			'11': 3,
			'12': 3,
			'13': 8,
			'17': 4,
			'18': 4,
			'19': 5,
			'38': 7,
			'40': 10,
			'41': 11,
			'42': 11,
			'43': 11,
			'44': 11,
			'45': 11,
			'46': 11,
			'47': 11,
			'48': 12,
			'50': 12,
			'51': 12,
			'52': 12,
			'53': 12,
			'54': 12,
			'55': 12,
			'62': 14,
		});
	},
};
