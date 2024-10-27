'use strict';

const config = require('./index.js');

module.exports = [
	...config,
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
