'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      age:{
        type:Sequelize.INTEGER
      },
      gender:{
        type:Sequelize.STRING
      },
      password:{
        type:Sequelize.STRING
      },
      role:{
        type:Sequelize.STRING
      },
      organizationId:{
        type:Sequelize.STRING,
        references:{
          model:{
            tableName:'organizations',
            schema:'schema'
          },
          key:'id'
        },
        allowNull:false,
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};