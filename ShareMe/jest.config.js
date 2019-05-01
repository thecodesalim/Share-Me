module.exports = {
    preset: 'jest-expo',
    setupTestFrameworkScriptFile: '<rootDir>setup-tests.js',
    transform: {
      '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    },
   
  };