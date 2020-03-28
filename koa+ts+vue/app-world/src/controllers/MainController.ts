import * as Koa from 'koa';
import { Controller, Get, Ctx } from 'koa-controllers';

@Controller // 让这个类与路由挂钩
export default class MainController {
  @Get('/')
  public async index(@Ctx ctx: Koa.BaseContext) { // koa文件里定义了很多interface
    ctx.body = 'Hello';
  }

  @Get('/user')
  public async user(@Ctx ctx: Koa.BaseContext) {
    ctx.body = 'user';
  }
}
