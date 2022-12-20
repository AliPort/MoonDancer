// Modules and Globals
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const { db } = require("./dbConnection.js");
// const { queryToFetchAllProducts } =  require("./queries/index.js")

// const fetchAllProducts = async  () => {
//     const products = await queryToFetchAllProducts()
//     console.log('DEM PRODUCTS ====>', products)
// }

// fetchAllProducts()

// Express Settings
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//create a user

 app.post("/tours", async (req, res) => {
   try {
     const { description } = req.body;
     const newTodo = await pool.query(
       "INSERT INTO tours (description) VALUES($1) RETURNING *",
       [description]
     );

     res.json(newTodo.rows[0]);
   } catch (err) {
     console.error(err.message);
   }
 });

//get all Users

app.get("/users", async (req, res) => {
  console.log("===== in users route =====");
  try {
    const allUsers = await db.query("SELECT * FROM users");
    console.log(allUsers, " :: allUsers");
    if (!allUsers) throw new Error("No users found");
    res.json(allUsers);
  } catch (err) {
    console.error(err.message);
  }
});

//get a User

 app.get("/users", async (req, res) => {
   try {
     const { id } = req.params;
     const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
       id
     ]);

     res.json(todo.rows[0]);
   } catch (err) {
     console.error(err.message);
   }
 });

//update a tour

// app.put("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;
//     const updateTodo = await pool.query(
//       "UPDATE todo SET description = $1 WHERE todo_id = $2",
//       [description, id]
//     );

//     res.json("Todo was updated!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

app.use(express.urlencoded({ extended: true }));

// app.use('/api/tours', require('./controllers/tours'))
// app.use('/api/users', require('./controllers/users'))

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});