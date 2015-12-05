var express = require('express');
var router = express.Router();
var User = require('../model/users');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/users', function (req, res, next){
	User.find(function(err, users){
  		if(!err) res.render('users',{
  			"users"	: users
  		});
  		else console.log('ERROR: '+err);
  	});
});

router.get('/newuser', function (req, res, next){
	res.render('newuser', {title:'Add new user'});
});

router.post('/adduser', function (req, res, next){
	console.log('POST');
	console.log(req.body);

	var user = new User({
		"nombreCompleto":req.body.nombreCompleto,
		"correoElectronico":req.body.correoElectronico,
		"contrasena":req.body.contrasena,
		"pais":req.body.pais,
		"ciudad":req.body.ciudad,
		"fechaNacimiento":req.body.fechaNacimiento
	});

	user.save(function (err){
		if (!err) console.log('Usuario almacenado!!');
		else console.log('ERROR' + err);
	});

	res.send(user);
});

module.exports = router;
