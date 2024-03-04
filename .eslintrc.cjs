// React configurations.
module.exports = {
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  env: {browser: true, es2020: true},
  plugins: ["react-refresh"],
  root: true,
  settings: {
    react: {version: "18.2"}
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn", {allowConstantExport: true}
    ]
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ]
};
