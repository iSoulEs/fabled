module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:svelte/recommended" ],
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["*.cjs"],
  overrides: [{ files: ["*.svelte"], parser: "svelte-eslint-parser", parserOptions: { parser: "@typescript-eslint/parser" } }],
  settings: {
    "svelte3/typescript": () => require("typescript")
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"]
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};
