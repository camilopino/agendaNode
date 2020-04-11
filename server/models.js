const mongoose = require('mongoose')
	const Schema = mongoose.Schema

	let UserSchema = new Schema({
		"userId":{ type: Number, require: true, unique:true },
		"nombre":{ type: String, require: true },
		"contrasena":{ type: String, require: true },
		"edad":{ type: Number, require: true }
	})
	let User = mongoose.model('Usuario', UserSchema)
	module.exports = User;
