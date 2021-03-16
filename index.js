'use strict';

module.exports = function (keepHistory) {
	process.stdout.write(
		keepHistory
			? ('\n'.repeat(process.stdout.rows) + '\x1B[H\x1B[2J')
			: '\x1B[2J\x1B[3J\x1B[H\x1Bc'
	);
}
