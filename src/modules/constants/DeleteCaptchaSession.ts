import filestream from 'fs';
import { _dirname } from './directories';

export = (sessionId: string) => {
	try {
		filestream.unlinkSync(_dirname + `\\manifest\\sessions\\${sessionId}.json`);
	} catch {
		console.warn('Session most likely destroyed');
	}
};
