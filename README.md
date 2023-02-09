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

```json
{
  "extends": "stylelint"
}
```

### When using Jest

Install the plugin additionally:

```console
$ npm install eslint-plugin-jest --save-dev
```

Then, add this to your config:

```json
{
  "extends": "stylelint/jest"
}
```

## [Changelog](CHANGELOG.md)
