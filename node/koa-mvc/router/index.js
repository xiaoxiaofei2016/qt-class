const KoaRouter = require('koa-router');
const router = new KoaRouter();
const registerController = require('../controller/register.js');
const loginController = require('../controller/login.js');

router.prefix('/api/v1')
// router.get('/any', async (ctx) => {
//   ctx.body = '123456'
// })
router.post('/login', loginController); // 用代码请求是post
router.get('/register', registerController); // 浏览器地址栏的请求是get


module.exports = router;