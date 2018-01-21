'use strict';

const isWin = process.platform === 'win32';

module.exports = function (isSoft = isWin) {
	process.stdout.write(
		isSoft ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'
	);
}
