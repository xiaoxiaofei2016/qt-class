/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575010376131_1401';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = { csrf: { // 访问安全
    enable: false
  }}
  config.password_secret = 'ps1234secr'// 加密
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    password: '163004',
    database: 'instagram'
  }

  return {
    ...config,
    ...userConfig,
  };
};
