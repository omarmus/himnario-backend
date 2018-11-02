'use strict';

let configSeeder = {
  'development': {
    'username': '',
    'password': '',
    'database': 'himnario',
    'host': 'himnario.sqlite',
    'dialect': 'sqlite',
    'pool': {
      'max': 15,
      'min': 0,
      'idle': 10000
    }
  },
  'production': {
    'username': 'username',
    'password': 'password',
    'database': 'database',
    'host': 'host',
    'seederStorage': 'sequelize',
    'seederStorageTableName': 'sequelize_seeders',
    'dialect': 'sqlite',
    'pool': {
      'max': 15,
      'min': 0,
      'idle': 10000
    }
  }
};

module.exports = configSeeder;
