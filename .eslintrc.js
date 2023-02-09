'use strict';

module.exports = {
	root: true,

	extends: ['./jest.js'],

	// TODO: Keep backward compatibility with CommonJS. We may delete after ESM migration.
	globals: {
		module: true,
		require: true,
	},

	reportUnusedDisableDirectives: true,
};
