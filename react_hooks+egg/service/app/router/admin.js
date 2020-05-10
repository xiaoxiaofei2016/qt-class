module.exports = app => {
  const { router, controller } = app
  var adminauth = app.middleware.adminauth()
  router.get('/admin/index', controller.admin.main.index)
  router.post('/admin/checkLogin', controller.admin.main.checkLogin)
  router.get('/admin/getTypeInfo',adminauth ,controller.admin.main.getTypeInfo)
}