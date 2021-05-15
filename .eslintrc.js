"use strict";

module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
  },
  env: {
    es6: true,
    node: true,
  },
  plugins: ["eslint-comments", "jest", "node", "sort-requires"],
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:node/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "prettier",
  ],
  rules: {
    "array-callback-return": "error",
    "dot-notation": "error",
    eqeqeq: ["error", "smart"],
    "eslint-comments/no-unused-disable": "error",
    "func-name-matching": "error",
    "guard-for-in": "error",
    "no-confusing-arrow": [
      "error",
      {
        allowParens: false,
      },
    ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    "no-implicit-coercion": "error",
    "no-lonely-if": "error",
    "no-shadow": "error",
    "no-unneeded-ternary": "error",
    "no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
      },
    ],
    "no-use-before-define": ["error", "nofunc"],
    "no-useless-return": "error",
    "no-var": "error",
    "node/no-unsupported-features/es-builtins": "error",
    "node/no-unsupported-features/es-syntax": "error",
    "node/no-unsupported-features/node-builtins": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "operator-assignment": "error",
    "padding-line-between-statements": [
      "error",
      // Require blank lines after all directive prologues (e. g. 'use strict')
      {
        blankLine: "always",
        prev: "directive",
        next: "*",
      },
      // Disallow blank lines between all directive prologues (e. g. 'use strict')
      {
        blankLine: "never",
        prev: "directive",
        next: "directive",
      },
      // Require blank lines after every sequence of variable declarations
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      // Blank lines could be between variable declarations
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      // Require blank lines before all return statements
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      // Require blank lines before and after all following statements
      {
        blankLine: "always",
        prev: "*",
        next: ["for", "function", "if", "switch", "try"],
      },
      {
        blankLine: "always",
        prev: ["for", "function", "if", "switch", "try"],
        next: "*",
      },
    ],
    "prefer-arrow-callback": "error",
    "prefer-object-spread": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "sort-requires/sort-requires": "error",
    strict: ["error", "global"],
  },
};
