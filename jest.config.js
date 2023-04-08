module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
    // https://stackoverflow.com/a/59062195/5476186
    "^.+\\.(svg|css)$": "./src/test/genericFileTransform.js",
  },

  testEnvironment: "jsdom",

  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/index.tsx",
    "!**/reportWebVitals.ts",
    "!**/react-app-env.d.ts",
    "!**/node_modules/**",
  ],

  coverageThreshold: {
    global: {
      lines: 99,
    },
  },
};
