module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint-config-airbnb-base",
    "prettier",
    "plugin:react/recommended"
  ],
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5"
      }
    ],
    "react/jsx-filename-extension": "off",
    "react/prefer-es6-class": 1,
    "no-param-reassign": 0
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
