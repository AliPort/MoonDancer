//config
require('dotenv').config
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) 

//routes
app.use('/api/users', require('./controllers/users'))

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('*', (req, res) => {
    res.render('error404')
})

//listen
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})