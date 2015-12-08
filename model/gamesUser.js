var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var gamesUser = new Schema({
	"idPersona":String,
	"juegoGanado":Number,
	"moduloGanado":String,
	"bagdeGanado":Boolean
});

module.exports = mongoose.model('GameUser',gamesUser);