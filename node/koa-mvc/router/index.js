const KoaRouter = require('koa-router');
const router = new KoaRouter();
const registerController = require('../controller/register.js');

router.get('/login', async (ctx) => { // 注册路由

});
router.get('/register', registerController);

module.exports = router;