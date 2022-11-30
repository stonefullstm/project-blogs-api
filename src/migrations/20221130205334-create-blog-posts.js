'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      }, 
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'users',
        },
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
        onUpdate: 'NO ACTION',
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
        onUpdate: new Date(),
      },    
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
