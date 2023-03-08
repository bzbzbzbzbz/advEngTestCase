/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/recommended",
    "eslint:recommended",
  ],
  "rules": {
    "quotes": [2, "single", { "avoidEscape": true }],
    "semi": ["error", "never"],
    "object-curly-spacing": ["error", "always"]
  }
}
