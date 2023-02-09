'use strict';

module.exports = {
	extends: [
		// prettier-ignore
		require.resolve('./index.js'),
		'plugin:jest/recommended',
		'plugin:jest/style',
	],
};
