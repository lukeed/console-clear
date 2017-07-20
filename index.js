'use strict';

const isWin = process.platform === 'win32';

module.exports = function (isSoft) {
	process.stdout.write(
		(isWin || isSoft) ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'
	);
}
