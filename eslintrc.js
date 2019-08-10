"use strict";

module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:node/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  "parserOptions": {
    "ecmaVersion": 6
  },
  "env": {
    "es6": true,
    "node": true
  },
  "plugins": [
    "node",
    "sort-requires"
  ],
  "rules": {
    "eqeqeq": "error",
    "no-console": "error",
    "no-use-before-define": ["error", "nofunc"],
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "padding-line-between-statements": [
      "error",
      // Require blank lines after all directive prologues (e. g. 'use strict')
      {
        "blankLine": "always",
        "prev": "directive",
        "next": "*"
      },
      // Disallow blank lines between all directive prologues (e. g. 'use strict')
      {
        "blankLine": "never",
        "prev": "directive",
        "next": "directive"
      },
      // Require blank lines after every sequence of variable declarations
      {
        "blankLine": "always",
        "prev": ["const", "let", "var"],
        "next": "*"
      },
      // Blank lines could be between variable declarations
      {
        "blankLine": "any",
        "prev": ["const", "let", "var"],
        "next": ["const", "let", "var"]
      },
      // Require blank lines before all return statements
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      },
      // Require blank lines before and after all following statements
      {
        "blankLine": "always",
        "prev": "*",
        "next": ["for", "function", "if", "switch", "try"]
      },
      {
        "blankLine": "always",
        "prev": ["for", "function", "if", "switch", "try"],
        "next": "*"
      }
    ],
    "prefer-const": "error",
    "sort-requires/sort-requires": "error",
    "strict": ["error", "global"],
    "eslint-comments/no-unused-disable": "error",
  }
};
