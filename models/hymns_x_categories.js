'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const HymnsXCategories = sequelize.define('hymns_x_categories', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    }
  }, {
    timestamps: false
  });

  return HymnsXCategories;
};
