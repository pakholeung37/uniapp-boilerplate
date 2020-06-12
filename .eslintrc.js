module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 条件编译下可能导致unreachable
    "no-unreachable": "off",
    "no-unused-vars": "off",
    "no-empty": "off",
  },
  globals: {
    uni: "readonly",
    wx: "readonly",
    swan: "readonly",
    getApp: "readonly",
    getCurrentPages: "readonly",
  },
};
