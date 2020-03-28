'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router -> url -> controller(控制器)
  router.post('/login/register', controller.login.register);
  router.post('/login', controller.login.login);
};
