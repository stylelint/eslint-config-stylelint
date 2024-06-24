# Changelog

## Head

- Removed: `no-confusing-arrow` because of the deprecation of formatting rules.
- Changed: replace deprecated `padding-line-between-statements` with `@stylistic/js/padding-line-between-statements`.
- Fixed: missing `funding` field in `package.json`.

## 21.0.0

- Removed: Node.js 16 support.
- Changed: bump `eslint-plugin-regexp` from v1 to v2.
- Changed: `parserOptions.ecmaVersion` from `2021` to `2023`.

## 20.0.0

- Added: `n/prefer-global/process` rule.

## 19.1.0

- Added: rules for ESM files.

## 19.0.0

- Removed: Node.js 14 support.
- Changed: migrate from `eslint-plugin-node` to `eslint-plugin-n`.
- Changed: `parserOptions.ecmaVersion` from `2020` to `2021`.

Migration note: You may need to rewrite rule names for `eslint-plugin-node` like this:

```diff js
-// eslint-disable-next-line node/no-extraneous-import
+// eslint-disable-next-line n/no-extraneous-import
```

See also the [`eslint-plugin-n` document](https://github.com/eslint-community/eslint-plugin-n#readme).

## 18.0.0

- Removed: Jest rules from the default config.
- Changed: `eslint-plugin-jest` to optional peer dependencies.
- Added: Jest only config `"stylelint/jest"`.
- Added: `eslint` to peer dependencies.

Migration note: if you want to continue Jest rules, you need to:

- run `npm install eslint-plugin-jest --save-dev`
- add `"stylelint/jest"` to `extends` in your ESlint config like this:

```diff json
{
-  "extends": ["stylelint"]
+  "extends": ["stylelint", "stylelint/jest"]
}
```

## 17.1.0

- Changed: `parserOptions.ecmaVersion` from `2019` to `2020`.

## 17.0.0

- Added: `func-names` rule.

## 16.0.0

- Removed: support for Node.js v12 (due to breaking change in `eslint-plugin-jest`).
- Changed: bump `eslint-plugin-jest` from v26 to v27.

## 15.1.0

- Changed: bump `eslint-plugin-jest` from v25 to v26.

## 15.0.0

- Changed: bump `eslint-plugin-jest` from v24 to v25.
- Removed: `eslint-plugin-eslint-comments` plugin.

## 14.0.0

- Added: ESM support.
- Added: `eslint-plugin-regexp` plugin.
- Removed: `eslint-plugin-sort-requires` plugin.

## 13.1.1

- Fixed: `node/no-unsupported-feature` range.

## 13.1.0

- Added: `allow` option to `no-console` rule.

## 13.0.0

- Added: `no-shadow` rule.

## 12.1.0

- Changed: bump `eslint-plugin-jest` from v23 to v24.

## 12.0.0

- Removed: `prefer-const`.
- Changed: `ecmaVersion` to `2019`.
- Changed: `eqeqeq` rule to `smart`.
- Added: new rules.
- Added: `eslint-config-prettier`.

## 11.1.0

- Fixed: add the `no-console` rule that was removed from `eslint/recommended` in ESLint v6.

## 11.0.0

- Added: `eslint-plugin-eslint-comments` ESLint plugin using `eslint-comments/recommended` rules.

## 10.0.0

- Added: `eslint-plugin-jest` ESLint plugin `jest/style` rules.

## 9.0.0

- Added: `jest/no-alias-methods` Jest rule. #56
- Added: `jest/prefer-to-be-null` Jest rule. #56
- Added: `jest/prefer-to-be-undefined` Jest rule. #56
- Added: `jest/prefer-to-contain` Jest rule. #56
- Added: `jest/valid-expect-in-promise` Jest rule. #56
- Added: `padding-line-between-statements` rule. #55

## 8.3.0

- Changed: `eslint-plugin-jest` rules to `error`

## 8.2.0

- Added: `eslint-plugin-jest` ESLint plugin.

## 8.1.0

- Added: `one-var` rule.

## 8.0.0

- Added: `eslint-plugin-node` ESLint plugin using `node/recommended` rules.

## 7.0.0

- Removed: stylistic rules.
- Added: eslint `4.0.0` compatibility.

## 6.0.0

- Added: rules and parse options for `node@4` compatibility.
- Removed: `spaced-comment` rules to support flow.

## 5.0.0

- Added: `padded-blocks` rule.

## 4.0.0

- Added: `no-multi-spaces` rule.

## 3.0.0

- Added: eslint `3.0.0` compatibility.
- Removed: eslint `2.0.0` compatibility.

## 2.0.0

- Added: rules for consistent whitespace.

## 1.0.0

- Added: eslint `2.0` compatibility.
- Removed: eslint `1.0` compatibility.

## 0.1.0

- Initial release.
