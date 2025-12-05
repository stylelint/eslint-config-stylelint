import assert from 'node:assert/strict';
import test from 'node:test';

import { ESLint } from 'eslint';

import config from '../jest.js';

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
