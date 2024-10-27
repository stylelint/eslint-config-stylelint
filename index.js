'use strict';

const globals = require('globals');
const js = require('@eslint/js'); // eslint-disable-line n/no-extraneous-require
const nPlugin = require('eslint-plugin-n');
const regexpPlugin = require('eslint-plugin-regexp');
const stylisticPlugin = require('@stylistic/eslint-plugin');

module.exports = [
	js.configs.recommended,
	nPlugin.configs['flat/recommended-script'],
	regexpPlugin.configs['flat/recommended'],
	{
		plugins: {
			'@stylistic': stylisticPlugin,
		},
		languageOptions: {
			ecmaVersion: 2023,
			sourceType: 'module',
			globals: {
				...globals.node,
			},
		},
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
		},
		rules: {
			'array-callback-return': 'error',
			'dot-notation': 'error',
			eqeqeq: ['error', 'smart'],
			'func-name-matching': 'error',
			'func-names': ['error', 'as-needed'],
			'guard-for-in': 'error',
			'no-console': [
				'error',
				{
					allow: ['warn', 'error'],
				},
			],
			'no-else-return': [
				'error',
				{
					allowElseIf: false,
				},
			],
			'no-implicit-coercion': 'error',
			'no-lonely-if': 'error',
			'no-shadow': 'error',
			'no-unneeded-ternary': 'error',
			'no-unused-vars': [
				'error',
				{
					ignoreRestSiblings: true,
				},
			],
			'no-use-before-define': ['error', 'nofunc'],
			'no-useless-return': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'one-var': ['error', 'never'],
			'operator-assignment': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-object-spread': 'error',
			'prefer-regex-literals': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			'sort-imports': ['error', { allowSeparatedGroups: true }],

			// Migrated from the deprecated built-in 'padding-line-between-statements'
			'@stylistic/padding-line-between-statements': [
				'error',
				// Require blank lines after all directive prologues (e. g. 'use strict')
				{
					blankLine: 'always',
					prev: 'directive',
					next: '*',
				},
				// Disallow blank lines between all directive prologues (e. g. 'use strict')
				{
					blankLine: 'never',
					prev: 'directive',
					next: 'directive',
				},
				// Require blank lines after every sequence of variable declarations
				{
					blankLine: 'always',
					prev: ['const', 'let', 'var'],
					next: '*',
				},
				// Blank lines could be between variable declarations
				{
					blankLine: 'any',
					prev: ['const', 'let', 'var'],
					next: ['const', 'let', 'var'],
				},
				// Require blank lines before all return statements
				{
					blankLine: 'always',
					prev: '*',
					next: 'return',
				},
				// Require blank lines before and after all following statements
				{
					blankLine: 'always',
					prev: '*',
					next: ['for', 'function', 'if', 'switch', 'try'],
				},
				{
					blankLine: 'always',
					prev: ['for', 'function', 'if', 'switch', 'try'],
					next: '*',
				},
			],

			// Avoid a global variable unique to Node.js.
			'n/prefer-global/process': ['error', 'never'],

			// Prefer code readability, e.g. `[0-9A-Za-z]`.
			'regexp/prefer-d': 'off',
		},
	},
	{
		files: ['*.mjs'],
		rules: {
			'no-restricted-globals': ['error', 'module', 'require'],
			strict: ['error', 'never'],
		},
	},
];
