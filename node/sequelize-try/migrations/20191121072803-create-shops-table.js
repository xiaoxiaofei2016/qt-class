'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable( // 创建表
    'shops',
    { //
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thumb_url: Sequelize.STRING,
      created_at: Sequelize.DATE, // 创建时间
      updated_at: Sequelize.DATE // 修改时间
    }
  ),

  down: (queryInterface, Sequelize) => queryInterface.dropTable( // 退回
    'shops'
  )
};
