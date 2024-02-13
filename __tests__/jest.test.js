'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { ESLint } = require('eslint');

const config = require('../jest');
const { isObject } = require('./helper');

test('basic properties of jest config', () => {
	assert(isObject(config.extends));
});

test('load jest config in ESLint to validate all rule syntax is correct', async () => {
	const eslint = new ESLint({ baseConfig: config, useEslintrc: false });
	const results = await eslint.lintText('test("foo");');

	assert(results);
});
