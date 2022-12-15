// Modules and Globals
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const { auth } = require("express-openid-connect");
const { Sequelize } = require("sequelize");



const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "32a1209502e2d4e6820625b82d4292a780980c73dd94daa53ebb18754255aaaa",
  baseURL: "http://localhost:3000",
  clientID: "JXIIX64zui2Z3weTAvTF20V81nBKu3kD",
  issuerBaseURL: "https://dev-q3ahisni.us.auth0.com",
};

// // SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

// const sequelize = new Sequelize('MoonDancer', 'postgres', '', {
//   dialect: 'postgres',
//   dialectOptions: {
//     // Your pg options here
//   }
// });


// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// Express Settings
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROOT
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to MoonDancer Charters",
  });
}); //not sure if the root will conflict with the auth0 log in/out page. Will need to test.

// serve static frontend in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public", "build")));
}

// Controllers & Routes

app.use(express.urlencoded({ extended: true }));

// app.use('/api/tours', require('./controllers/tours'))
// app.use('/api/users', require('./controllers/users'))

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
