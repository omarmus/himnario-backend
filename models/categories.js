'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const Categories = sequelize.define('categories', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING(100)
    }
  }, {
    timestamps: false
  });

  return Categories;
};
