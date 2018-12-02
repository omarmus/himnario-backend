'use strict';

const express = require('express');
const asyncify = require('express-asyncify');
const fs = require('fs');
const path = require('path');
const api = asyncify(express.Router());

module.exports = function (models) {
  api.get('/detalle/:number', async (req, res) => {
    let { number } = req.params;
    let detalle = await models.details.findAll({
      where: {
        id_hymn: number
      },
      order: ['order']
    });
    res.send(detalle);
  });

  console.log('CWD', process.cwd());
  api.get('/read-image/:number', (req, res) => {
    let { number } = req.params;
    number = number.padStart(3, '0');
    console.log('Número a buscar', number);
    // read image file
    let filename = `${process.cwd()}/public/scores/${number}.png`;
    console.log('FILENAME 1', filename);
    if (fs.existsSync(filename)) {
      readFile(filename, res);
    } else {
      filename = filename.replace('.png', 'a.png');
      console.log('FILENAME 2', filename);
      if (fs.existsSync(filename)) {
        readFile(filename, res);
      } else {
        res.status(404).send({ error: `No existe el archivo ${number}.png` });
      }
    }
  });

  function readFile (filename, res, image) {
    fs.readFile(filename, (err, data) => {
      console.log('==========================================');
      console.log('READ', err, typeof err, data, typeof data);
      // error handle
      if (err) {
        res.status(500).send(err);
      }

      // get image file extension name
      let extensionName = path.extname(filename);
      // convert image file to base64-encoded string
      let base64Image = Buffer.from(data, 'binary').toString('base64');

      // combine all strings
      let imgSrcString = `data:image/${extensionName.split('.').pop()};base64,${base64Image}`;

      if (image) {
        res.send({ image1: image, image2: imgSrcString });
      } else {
        if (filename.indexOf('a.png') !== -1) {
          filename = filename.replace('a.png', 'b.png');
          readFile(filename, res, imgSrcString);
        } else {
          // send image src string into jade compiler
          res.send({ image: imgSrcString });
        }
      }
    });
  }

  return api;
};
