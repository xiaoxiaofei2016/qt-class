## npm init
  npm init -y
  tsc --init
  cnpm i @types/koa   koa里面写ts
  cnpm i koa-controllers -S
  cnpm i reflect-metadata -S

## npm install mysql2 sequelize sequelize-cli

./node_modules/.bin/sequelize init // 数据库初始化
.sequelizerc配置文件 -> ./node_modules/.bin/sequelize init 自动创建database文件夹
在database文件下的config配置数据库
执行./node_modules/.bin/sequelize db:create 创建数据库
./node_modules/.bin/sequelize migration:create --name create-user-table 创建表
./node_modules/.bin/sequelize db:migrate 设计表结构

# 初始化
  sequelize init 初始化完成之后生成的目录:
  config: 配置目录
  migrations: 迁移文件(数据库表结构)
  seeders: 种子文件(生成测试数据)
  models: 模型文件
# 创建数据库 sequelize db:create
# 构建数据库迁移结构 sequelize migration:create --name user
