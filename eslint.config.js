'use strict';

const config = require('./index.js');
const jestConfig = require('./jest.js');

module.exports = [
	...config,
	...jestConfig,
	{
		// TODO: Keep backward compatibility with CommonJS. We may delete after ESM migration.
		languageOptions: {
			globals: {
				module: true,
				require: true,
			},
		},
	},
];
