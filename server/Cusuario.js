var User= require ('./models.js')

module.exports.insertUsuario= function(callback){
  let usuario1 = new User({nombre:"camilo", contrasena:"1234",edad:27})

  usuario1.save((error)=>{
    if(error)callback(error)
    callback(null,"usuario guardado correctamente")
  })
}
