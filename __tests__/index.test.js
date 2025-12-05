import assert from 'node:assert/strict';
import test from 'node:test';

import { ESLint } from 'eslint';

import config from '../index.js';

const newESLint = () => new ESLint({ fix: true, baseConfig: [...config] });

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
