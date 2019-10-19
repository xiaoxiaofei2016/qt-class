const KoaRouter = require('koa-router');
const router = new KoaRouter();
const registerController = require('../controller/register.js');

router.post('/login', async (ctx) => { // 注册路由

});
router.post('/register', registerController);

module.exports = router;