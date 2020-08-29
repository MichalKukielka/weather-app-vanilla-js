module.exports = {
  // use webpack to transpile test files before running jest
  // webpack --config wp-test.config.js ./test-files/*
    entry: './test-files/* ',
    output: {
      filename: 'tests.test.js',
      path: __dirname + '/test-result'
    }
};