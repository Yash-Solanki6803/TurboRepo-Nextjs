//Just importing the config from jsconfig workspace and exporting it
const sharedConfig = require("jestconfig");
const config = {
  ...sharedConfig,
};
module.exports = config;
