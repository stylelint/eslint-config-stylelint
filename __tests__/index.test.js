'use strict';

// eslint-disable-next-line n/no-unsupported-features/node-builtins
const test = require('node:test');
const assert = require('node:assert/strict');

const { ESLint } = require('eslint');

const config = require('../index');
const { isObject } = require('./helper');

test('basic properties of config', () => {
	assert(isObject(config.parserOptions));
	assert(isObject(config.env));
	assert(isObject(config.rules));
	assert(Array.isArray(config.extends));
});

test('load config in ESLint to validate all rule syntax is correct', async () => {
	const eslint = new ESLint({ baseConfig: config, useEslintrc: false });
	const results = await eslint.lintText('var foo\n');

	assert(results);
});
