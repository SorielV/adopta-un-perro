var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UsrSchema = new Schema({
   nombre: String,
   edad: String,
   estautura: String,
   peso: String,
   vacunas: String,
   señas: String
});
module.exports = mongoose.model('lomito', UsrSchema);