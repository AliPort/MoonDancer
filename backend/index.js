// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// serve static frontend in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'public', 'build')));
}

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