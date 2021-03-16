'use strict';

module.exports = function (keepHistory, keepLastScreen) {
	if (keepHistory && keepLastScreen) {
		process.stdout.write('\n'.repeat(process.stdout.rows));
	}
	process.stdout.write(
		keepHistory ? '\x1B[H\x1B[2J' : '\x1B[2J\x1B[3J\x1B[H\x1Bc'
	);
}
