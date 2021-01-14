'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Posts',
      'UserId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    ).then(() => {
      return queryInterface.addColumn(
        'Posts',
        'CategoryId',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Categories',
            key: 'id'
          }
        }
      )
    })
  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Posts', // name of Source model
      'UserId' // key we want to remove
    ).then(() => {
      return queryInterface.removeColumn(
        'Posts', // name of Source model
        'CategoryId' // key we want to remove
      )
    }

    )
  }
};
