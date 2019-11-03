var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsrSchema = new Schema({
    fecha: { type: Date, default: Date.now },
    nombre: String,
    contraHash: String,
    correo: String,
});

module.exports = mongoose.model('usuario', UsrSchema);