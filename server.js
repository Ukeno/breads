require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

const PORT = process.env.PORT

const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  
//routes
app.get('/', (req,res)=> {
    res.send('welcome to an Awesome App about breads!')
})

// breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// bakers
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})
  
//listen
app.listen(PORT, () => {
    console.log('listening on port' , PORT)
})

// use npx nodemon to update the server and control c to close it 
// use localhost/3000 to view the home page 