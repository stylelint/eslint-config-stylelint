'use strict';

// eslint-disable-next-line n/no-unsupported-features/node-builtins
const test = require('node:test');
const assert = require('node:assert/strict');

const { ESLint } = require('eslint');

const config = require('../index');
const { isObject } = require('./helper');

const newESLint = () => new ESLint({ baseConfig: config, useEslintrc: false, fix: true });

test('basic properties of config', () => {
	assert(isObject(config.parserOptions));
	assert(isObject(config.env));
	assert(isObject(config.rules));
	assert(Array.isArray(config.extends));
});

test('load config in ESLint to validate all rule syntax is correct', async () => {
	const results = await newESLint().lintText('var foo\n');

	assert(results);
});

test('padding-line-between-statements', async () => {
	const code = `
const asdf = 'dfsdf';
function xxcv() {
	const sdfsdf = 'sdfsdf';
	return sdfsdf;
}
for (let i = 0; i < 10; i++) {
	console.log(i);
}
const asdfsfd = 'sdfsdf';
if (true) {
	console.log('true');
}
`;

	const results = await newESLint().lintText(code);

	const expected = `
const asdf = 'dfsdf';

function xxcv() {
	const sdfsdf = 'sdfsdf';

	return sdfsdf;
}

for (let i = 0; i < 10; i++) {
	console.log(i);
}

const asdfsfd = 'sdfsdf';

if (true) {
	console.log('true');
}
`;

	assert.equal(results[0].output, expected);
});
