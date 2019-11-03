var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UsrSchema = new Schema({
   nombre: String,
   edad: String,
   tamaño: String,
   peso: String,
   vacunas: String,
   señas_particulares: String
});
module.exports = mongoose.model('lomito', UsrSchema);