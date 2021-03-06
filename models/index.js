'use strict';

const { ModelHandler } = require('sequelize-handlers');
const apiRest = '/api-rest/';
const util = require('../lib/util');
const types = {
  'post': {
    params: '',
    function: 'create'
  },
  'get-single': {
    params: '/:id',
    function: 'get'
  },
  'get': {
    params: '',
    function: 'query'
  },
  'delete': {
    params: '/:id',
    function: 'remove'
  },
  'put': {
    params: '/:id',
    function: 'update'
  }
};

function filterModel (model) {
  let pos = model.indexOf('?');
  if (pos !== -1) {
    console.log('cut', model.substring(0, pos));
    return model.substring(0, pos);
  }
  return model;
}

function init (app, sequelize) {
  // Cargando todos los modelos que se encuentran en la carpeta models y en sus subcarpetas
  let models = util.loadModels(__dirname, sequelize, { exclude: ['index.js'] });

  // Creando asociaciones
  console.log('MODELS', models);
  const { himnos, categories, hymns_x_categories, details } = models;

  details.belongsTo(himnos, { foreignKey: { name: 'id_hymn', allowNull: false }, as: 'hymn' });
  himnos.hasMany(details, { foreignKey: { name: 'id_hymn', allowNull: false }, as: 'hymn' });

  hymns_x_categories.belongsTo(himnos, { foreignKey: { name: 'id_hymn', allowNull: false }, as: 'hymn' });
  himnos.hasMany(hymns_x_categories, { foreignKey: { name: 'id_hymn', allowNull: false } });

  hymns_x_categories.belongsTo(categories, { foreignKey: { name: 'id_category', allowNull: false }, as: 'category' });
  categories.hasMany(hymns_x_categories, { foreignKey: { name: 'id_category', allowNull: false }, as: 'category' });

  // Creando manejadores sequelize-handler para cada modelo
  let handlers = {};

  for (let i in models) {
    handlers[i] = new ModelHandler(models[i]);
  }

  app.all(`${apiRest}*`, function (req, res, next) {
    let method = req.method.toLowerCase();
    let type = method;
    let url = req.url.split('/');
    let object = filterModel(url[2]);
    let model = models[object];

    if (method === 'get' && url.length === 4) {
      type = 'get-single';
    }
    app[method](`${apiRest}` + object + types[type].params || '', handlers[object][types[type].function](model));

    next();
  });

  return models;
}
module.exports = {
  init
};
