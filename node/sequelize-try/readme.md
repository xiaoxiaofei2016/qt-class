- ./node_modules/.bin/sequelize init 自动化构建sql命令
- ./node_modules/.bin/sequelize db:create 创建数据库
- ./node_modules/.bin/sequelize migration:create --name create-shops-table 创建表
- ./node_modules/.bin/sequelize db:migrate 执行迁移




- config 配置数据库
- migrations 数据库迁移文件 会将mysql表，字段 创建、修改 迁移 留下记录
- models 业务模型层 表映射为对象 Artical 
  insert to   ->  new Article({title: '})
- seeders  测试数据

- 离开sql 来到工具
