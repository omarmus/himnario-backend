'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const Categories = sequelize.define('details', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    order: {
      type: Sequelize.INTEGER(10)
    },
    type: {
      type: Sequelize.ENUM,
      values: ['STROPHE', 'CHORUS'],
      defaultValue: 'STROPHE'
    },
    content: {
      type: Sequelize.TEXT
    }
  }, {
    timestamps: false
  });

  return Categories;
};
