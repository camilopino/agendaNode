const mongoose = require('mongoose')
	const Schema = mongoose.Schema


  	let Evento= new Schema({
  		"title":{type:String, require:true},
  		"start":{ type: Date, require: true},
  		"start_hour":{type:Number, require: true},
  		"allDay":{type:Boolean, require: false},
  		"end":{type:Date, require:false},
  		"end_hour":{type:Number, require:false}
  	})
  	let Event = mongoose.model('eventos', Evento)
  	module.exports = Event
