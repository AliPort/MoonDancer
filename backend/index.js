// Modules and Globals
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const { queryToFetchAllProducts } =  require("./queries/index.js")


const fetchAllProducts = async  () => {
    const products = await queryToFetchAllProducts()
    console.log('DEM PRODUCTS ====>', products)
}

fetchAllProducts()

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
}); 

// serve static frontend in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public", "build")));
}

// Controllers & Routes

app.use(express.urlencoded({ extended: true }));

app.use('/api/tours', require('./controllers/tours'))
app.use('/api/users', require('./controllers/users'))

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
