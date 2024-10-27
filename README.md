# eslint-config-stylelint

[![NPM version](https://img.shields.io/npm/v/eslint-config-stylelint.svg)](https://www.npmjs.org/package/eslint-config-stylelint)
[![Build Status](https://github.com/stylelint/eslint-config-stylelint/workflows/CI/badge.svg)](https://github.com/stylelint/eslint-config-stylelint/actions)

> Stylelint org's shareable config for ESLint.

For consistent JavaScript across Stylelint's repos.

## Installation

```console
$ npm install eslint-config-stylelint --save-dev
```

## Usage

Add this to your ESLint config:

```js
import stylelintConfig from "eslint-config-stylelint";

export default [...stylelintConfig];
```

### For Jest

Install the plugin additionally:

```console
$ npm install eslint-plugin-jest --save-dev
```

Then, update your config:

```js
import stylelintConfig from "eslint-config-stylelint";
import stylelintJestConfig from "eslint-config-stylelint/jest";

export default [...stylelintConfig, ...stylelintJestConfig];
```

## [Changelog](CHANGELOG.md)
