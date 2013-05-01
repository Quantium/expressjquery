var Schema = require('mongoose').Schema;

var heroe_schema = new Schema({
  name        :   String,
  facts   :   Array
});

var Heroe = module.exports = heroe_schema;