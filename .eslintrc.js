'use strict';

module.exports = {
	root: true,

	extends: ['./index.js', './jest.js'],

	settings: {
		jest: { version: 27 },
	},

	// TODO: Keep backward compatibility with CommonJS. We may delete after ESM migration.
	globals: {
		module: true,
		require: true,
	},

	reportUnusedDisableDirectives: true,
};
