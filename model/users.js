var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var users = new Schema({
	"nombreCompleto":String,
	"correoElectronico":String,
	"contrasena":String,
	"pais":String,
	"ciudad":String,
	"fechaNacimiento":String
});

module.exports = mongoose.model('Users',users);