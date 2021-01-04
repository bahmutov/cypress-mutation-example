/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutate: ['src/**/*.js'],
  // testRunner: 'jest',
  // mutator: 'javascript',
  commandRunner: {
    command: 'npm run cy:run',
  },
  reporters: ['progress', 'clear-text', 'html'],
  coverageAnalysis: 'off',
  mutator: {
    plugins: ['@babel/plugin-syntax-jsx'],
  },
}
