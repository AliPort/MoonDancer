// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: '32a1209502e2d4e6820625b82d4292a780980c73dd94daa53ebb18754255aaaa',
  baseURL: 'http://localhost:3000',
  clientID: 'JXIIX64zui2Z3weTAvTF20V81nBKu3kD',
  issuerBaseURL: 'https://dev-q3ahisni.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});



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