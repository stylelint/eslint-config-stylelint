"use strict";

// eslint-disable-next-line no-undef -- Keep backward compatibility with CommonJS.
const config = require("../index");

it("test basic properties of config", () => {
  expect(isObject(config.parserOptions)).toBeTruthy();
  expect(isObject(config.env)).toBeTruthy();
  expect(isObject(config.rules)).toBeTruthy();
});

it("load config in ESLint to validate all rule syntax is correct", () => {
  // eslint-disable-next-line no-undef -- Keep backward compatibility with CommonJS.
  const CLIEngine = require("eslint").CLIEngine;

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: ".eslintrc.js",
  });

  expect(cli.executeOnText("var foo\n")).toBeTruthy();
});

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}
