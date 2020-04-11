const Router =require('express').Router();
const Eventos= require('./modelsEvents.js');
//obtener todos los datos
Router.get('/all', function(req, res){
  Eventos.find({}).exec(function(err,docs){
    if(err){
      res.status(500)
      res.json(err)
    }
    res.json(docs)
  })

})


//obtener un usuario por su // IDEA:
Router.get('/', function(req, res){


})

//agregar a un evento
Router.post('/new', function(req, res){

    let nombre = req.body.title
    let start = req.body.start
    let start_hour= req.body.start_hour
    let allDay = req.body.allDay
    let end= req.body.end
    let end_hour= req.body.end_hour

    let eventos= new Eventos({
      title:nombre,
      start:start,
      start_hour:start_hour,
      allDay:allDay,
      end:end,
      end_hour:end_hour

    })

    eventos.save((error)=>{
      if(error){
        res.status(500)
        res.json(error)
      }
      res.json(eventos)

    })



})

//eliminar a un usuario por su id
Router.post('/delete/:id', function(req, res){

  let id= req.body.id
  console.log(id)

  Eventos.deleteOne({_id:id},function(err){
    if(err){
      res.status(500)
      res.json(err)
    }
    res.send("evento eliminado")
  })

  })





module.exports= Router
