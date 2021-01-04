/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutate: ['src/**/*.js'],
  concurrency: 1,
  // testRunner: 'jest',
  // mutator: 'javascript',
  commandRunner: {
    command: 'npm run ci',
  },
  reporters: ['progress', 'clear-text', 'html'],
  coverageAnalysis: 'off',
  // mutator: {
  //   plugins: ['@babel/plugin-syntax-jsx'],
  // },
}
