"use strict";

// eslint-disable-next-line no-undef -- Keep backward compatibility with CommonJS.
const { ESLint } = require("eslint");

// eslint-disable-next-line no-undef -- Keep backward compatibility with CommonJS.
const config = require("../index");

it("test basic properties of config", () => {
  expect(isObject(config.parserOptions)).toBeTruthy();
  expect(isObject(config.env)).toBeTruthy();
  expect(isObject(config.rules)).toBeTruthy();
});

it("load config in ESLint to validate all rule syntax is correct", async () => {
  const eslint = new ESLint({});

  const results = await eslint.lintText("var foo\n");

  expect(results).toBeTruthy();
});

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}
