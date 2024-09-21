/** @type {import("prettier").Config} */
const config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: false,
  printWidth: 120,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,

  // Overrides
  overrides: [
    {
      files: ["./src/*.ts"],
      options: { parser: "babel-ts" },
    },
  ],
};

export default config;
