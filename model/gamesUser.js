var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var gamesUser = new Schema({
	"idPersona":String,
	"juegoGanado":Number,
	"moduloGanado":String
});

module.exports = mongoose.model('GameUser',gamesUser);