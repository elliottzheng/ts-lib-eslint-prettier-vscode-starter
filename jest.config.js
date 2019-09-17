module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testEnvironment: "node",
  testRegex: "/test/.*\\.(test|spec)?\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  }
};
