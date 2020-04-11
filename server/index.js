const http = require('http'),
      path= require('path'),
      Routing= require('./rutas.js'),
      express= require('express'),
      bodyParser= require('body-parser'),
      mongoose= require('mongoose');
      operaciones= require('./Cusuario.js')
      const Router =require('express').Router();
      const Usuario= require('./models.js')
      //busqueda de login
      const Login =  Router.post('/',function(req, res){
        let user= req.body.user
        console.log(user)
        let pass= req.body.pass
        console.log(pass)
        Usuario.findOne({nombre:user, contrasena:pass}).exec(function(err, doc){
        if (err) {
            res.status(500)
            res.json(err)
          }
          res.send("validado")
        })
      })

const PORT= 3000
const app= express()

const Server= http.createServer(app)
mongoose.connect('mongodb://localhost/examen')
operaciones.insertUsuario((error, result)=>{
  if(error)console.log(error)
  console.log(result)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



app.use(express.static('client'))
app.use('/login',Login)
app.use('/events', Routing)

Server.listen(PORT, function(){
  console.log("el servido esta corriendo en el puerto: "+PORT);
})
