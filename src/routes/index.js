const newRoute=require('./new')
const sideRoute=require('./side')

function route(app){ 
   app.use('/new',newRoute)
   app.use('/',sideRoute)
}

module.exports=route