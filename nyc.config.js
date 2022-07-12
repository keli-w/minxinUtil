/**
 * https://www.npmjs.com/package/nyc#common-configuration-options
 */
module.exports = {
  all: false,
  extension: ['.js', '.ts'],
  include: ['esm/common'],
  exclude: [],
  reporter: ['html', 'text'],
  'report-dir': './coverage',
  'check-coverage': true,
  statements: 95,
  branches: 85,
  functions: 95,
  lines: 100,
};
