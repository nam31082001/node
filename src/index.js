const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars= require('express-handlebars')
const route=require('./routes')
const app = express()
const port = 8080

app.use(express.static(path.join(__dirname,'public')))


app.use(express.urlencoded(
    {
        extended:true
    }
))
app.use(express.json())




// app.use(morgan('combined'))

app.engine('hbs', handlebars.engine(
    {extname:'.hbs'}
))
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'))
//Route init
route(app)

// 127.0.0.1- localhost 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
