module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  rules: {
    "react/jsx-filename-extension": [2, { extensions: [".jsx", ".tsx"] }],
    "import/extensions": [2, "never"],
    quotes: [2, "double"],
    "import/prefer-default-export": 0,
  },
};
