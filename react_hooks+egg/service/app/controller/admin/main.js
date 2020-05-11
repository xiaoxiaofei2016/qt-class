'use strict';

const Controller = require('egg').Controller

class MainController extends Controller {

  async index() {
    //首页的文章列表数据
    this.ctx.body = 'hi api'
  }
  //判断用户名密码是否正确
  async checkLogin() {
    let userName = this.ctx.request.body.userName
    let password = this.ctx.request.body.password
    const sql = " SELECT userName FROM admin_login WHERE userName = '" + userName +
      "' AND password = '" + password + "'"

    const res = await this.app.mysql.query(sql)
    if (res.length > 0) {
      //登录成功,进行session缓存
      let openId = new Date().getTime()
      this.ctx.session.openId = { 'openId': openId }
      this.ctx.body = { 'data': '登录成功', 'openId': openId }

    } else {
      this.ctx.body = { data: '登录失败' }
    }
  }

  async getTypeInfo() {
    const resType = await this.app.mysql.select('type')
    this.ctx.body = { data: resType }
  }

  //添加文章
  async addArticle() {
    let tmpArticle = this.ctx.request.body
    // tmpArticle.
    const result = await this.app.mysql.insert('article', tmpArticle)
    const insertSuccess = result.affectedRows === 1
    const insertId = result.insertId
    this.ctx.body = {
      isScuccess: insertSuccess,
      insertId: insertId
    }
  }

  //修改文章
  async updateArticle() {
    let tmpArticle = this.ctx.request.body
    const result = await this.app.mysql.update('article', tmpArticle);
    const updateSuccess = result.affectedRows === 1;
    console.log(updateSuccess)
    this.ctx.body = {
      isScuccess: updateSuccess
    }
  }

  //获得文章列表
  async getArticleList() {

    let sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'ORDER BY article.id DESC '

    const resList = await this.app.mysql.query(sql)
    this.ctx.body = { list: resList }

  }

}

module.exports = MainController