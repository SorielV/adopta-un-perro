var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PerreraSchema = new Schema({
    fecha: { type: Date, default: Date.now },
    nombre: String,
    direcion: String,
    telefono: String,
    contraHash: String,
    correo: String,
});

module.exports = mongoose.model('perrera', PerreraSchema);