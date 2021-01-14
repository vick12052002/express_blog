const { DataTypes } = require('sequelize');
const db = require('../db');

const Lottery = db.define(
  'Lottery',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

db.sync().then(() => {
  console.log('success!');
});

module.exports = { Lottery };
