var AccountController = function (userModel, session, mailer){
	this.ApiResponse = require('../model/api-response.js');
	this.ApiMessages = require('../model/api-messages.js');
	this.UserProfileModel = require('../model/user-profile.js');
	this.userModel = userModel;
	this.session = session;
	this.mailer = mailer;
};

AccountController.prototype.getSession = function(){
	return this.session;
};

AccountController.prototype.setSession = function(session){
	this.session = session;
};

AccountController.prototype.logon = function(correoElectronico, contrasena, callback){
	var me = this;;

	me.userModel.findOne({correoElectronico: correoElectronico  }, function (err, user){
		if(err){
			return callback(err, new me.ApiResponse({
				success: false, extras: {msg: me.ApiMessages.DB_ERROR}
			}));
		}
		if (user){
			if(contrasena==user.contrasena)
			{
				var userprofilemodel = new me.UserProfileModel({
					correoElectronico: user.correoElectronico,
					nombreCompleto: user.nombreCompleto
				});

				me.session.UserProfileModel = userprofilemodel;

				return callback(err, new me.ApiResponse({
					success: true, extras: {
						userprofilemodel:userprofilemodel
					}
				}));
			} else {
				return callback(err, new me.ApiResponse({success: false, extras: {msg: me.ApiMessages.INVALID_PWD} }));
			}
		}else{
			return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.EMAIL_NOT_FOUND } }));	
		}
	});
}

AccountController.prototype.logoff = function(){
	if (this.session.userprofilemodel) delete this.session.userprofilemodel;
	return;
}

module.exports = AccountController;