/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');
const packageJson = require(`${__dirname}/projects/va/ui-sdk/package.json`);
const buildVersion = packageJson.version;
module.exports = {
  projectVersion: buildVersion,
  projectDir: __dirname,
  componentsDir: join(__dirname, 'projects/va/ui-sdk'),
  scriptsDir: join(__dirname, 'scripts'),
  outputDir: join(__dirname, 'dist'),
  publishDir: join(__dirname, 'publish'),
  libDir: join(__dirname, 'lib')
};
