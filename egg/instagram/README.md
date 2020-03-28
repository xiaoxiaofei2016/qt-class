npm install mysql2 sequelize sequelize-cli
npm init egg --type=simple
./node_modules/.bin/sequelize init // 数据库初始化
.sequelizerc配置文件 -> ./node_modules/.bin/sequelize init 自动创建database文件夹
在database文件下的config配置数据库
执行./node_modules/.bin/sequelize db:create 创建数据库
./node_modules/.bin/sequelize migration:create --name create-user-table 创建表
./node_modules/.bin/sequelize db:migrate 设计表结构


instagram 前后端分离
  react ANDT
  后端 /api/v2
  /login/register post
  用户模块的开发

- egg.js app代表整个应用
context controller
controller目录下的所有文件,自动转化为中间件

- router, 创建了controller
post 发送表单,跨站访问,有安全访问问题
egg.js 配置项
config.security = { csrf: { // 访问安全
    enable: false
  }}

  Controller  = require('egg).Controller