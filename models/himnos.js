'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const Pages = sequelize.define('himnos', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    number: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    author: {
      type: Sequelize.STRING(100)
    },
    arranger: {
      type: Sequelize.STRING(100)
    },
    adapted: {
      type: Sequelize.STRING(100)
    },
    traductor: {
      type: Sequelize.STRING(100)
    },
    reference: {
      type: Sequelize.STRING(100)
    },
    tone: {
      type: Sequelize.STRING(20)
    },
    pages: {
      type: Sequelize.INTEGER(1)
    }
  }, {
    timestamps: false
  });

  return Pages;
};
