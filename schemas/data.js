var mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		require: true
	}
});

var User = mongoose.model('User', UserSchema);

module.exports = User; 