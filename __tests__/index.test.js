'use strict';

const { ESLint } = require('eslint');

const config = require('../index');
const { isObject } = require('./helper');

test('basic properties of config', () => {
	expect(isObject(config.parserOptions)).toBeTruthy();
	expect(isObject(config.env)).toBeTruthy();
	expect(isObject(config.rules)).toBeTruthy();
	expect(Array.isArray(config.extends)).toBeTruthy();
});

test('load config in ESLint to validate all rule syntax is correct', async () => {
	const eslint = new ESLint({ baseConfig: config, useEslintrc: false });
	const results = await eslint.lintText('var foo\n');

	expect(results).toBeTruthy();
});
