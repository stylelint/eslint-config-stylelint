'use strict';

const { ESLint } = require('eslint');

const config = require('../jest');
const { isObject } = require('./helper');

test('basic properties of config', () => {
	expect(isObject(config.extends)).toBeTruthy();
});

test('load config in ESLint to validate all rule syntax is correct', async () => {
	const eslint = new ESLint({ baseConfig: config, useEslintrc: false });
	const results = await eslint.lintText('test("foo");');

	expect(results).toBeTruthy();
});
