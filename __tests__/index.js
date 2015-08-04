var config = require("../")
var test = require("tape")

test("test basic properties of config", function (t) {
  t.ok(isObject(config.ecmaFeatures), "features is object")
  t.ok(isObject(config.env), "env is object")
  t.ok(isObject(config.rules), "rules is object")
  t.end()
})

test("load config in eslint to validate all rule syntax is correct", function (t) {
  var CLIEngine = require("eslint").CLIEngine

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: "eslintrc.json",
  })

  t.ok(cli.executeOnText("var foo\n"), "can executeOnText")
  t.end()
})

function isObject(obj) {
  return typeof obj === "object" && obj !== null
}
