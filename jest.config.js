module.exports = {
  preset: "jest-expo",
  rootDir: ".",
  roots: ["<rootDir>/src/", "<rootDir>/__tests__/"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
  setupFiles: ["<rootDir>/src/main/config/jest-setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/mocks?/"],
  verbose: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "**/data/usecase(s)?/**/*.{ts,tsx})",
    "!**/data/protocols/**",
    "!**/node_modules/**",
    "!**/__tests__/**",
    "!**/main/**",
    "!**/domain/**",
  ],
};
