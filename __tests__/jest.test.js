'use strict';

// eslint-disable-next-line n/no-unsupported-features/node-builtins
const test = require('node:test');
const assert = require('node:assert/strict');

const { ESLint } = require('eslint');

const config = require('../jest');
const { isObject } = require('./helper');

test('basic properties of jest config', () => {
	assert(isObject(config.extends));
});

test('load jest config in ESLint to validate all rule syntax is correct', async () => {
	const baseConfig = {
		...config,
		settings: {
			jest: { version: 27 },
		},
	};
	const eslint = new ESLint({ baseConfig, useEslintrc: false });
	const results = await eslint.lintText('test("foo");');

	assert(results);
});
