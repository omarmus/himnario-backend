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
    },
    time: {
      type: Sequelize.STRING(20)
    },
    time2: {
      type: Sequelize.STRING(20)
    }
  }, {
    timestamps: false
  });

  return Categories;
};
