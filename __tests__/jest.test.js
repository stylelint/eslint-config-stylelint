'use strict';

// eslint-disable-next-line n/no-unsupported-features/node-builtins
const test = require('node:test');
const assert = require('node:assert/strict');

const { ESLint } = require('eslint');

const config = require('../jest');

test('load jest config in ESLint to validate all rule syntax is correct', async () => {
	const baseConfig = [
		...config,
		{
			settings: {
				jest: { version: 27 },
			},
		},
	];
	const eslint = new ESLint({ baseConfig });
	const results = await eslint.lintText('test("foo");');

	assert(results);
	assert.equal(results.length, 1);
	assert.deepEqual(
		results[0].messages.map((m) => m.ruleId),
		['jest/no-disabled-tests', 'jest/expect-expect'],
	);
});
