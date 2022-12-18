// // Modules and Globals
// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const app = express();
// const { queryToFetchAllProducts } =  require("./queries/index.js")


// const fetchAllProducts = async  () => {
//     const products = await queryToFetchAllProducts()
//     console.log('DEM PRODUCTS ====>', products)
// }

// fetchAllProducts()

// // Express Settings
// app.use(cors());
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // ROOT
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Welcome to MoonDancer Charters",
//   });
// }); 

// // serve static frontend in production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "public", "build")));
// }

// // Controllers & Routes

// app.use(express.urlencoded({ extended: true }));

// app.use('/api/tours', require('./controllers/tours'))
// app.use('/api/users', require('./controllers/users'))

// // Listen for Connections
// app.listen(process.env.PORT, () => {
//   console.log(`Listening on ${process.env.PORT}`);
// });


const express = require("express");
const app = express();
const cors = require("cors");
const MoonDancer = require("./db").default;

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a new user

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO users (username) VALUES($1) RETURNING *",
      [username]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all Users

app.get("/todos", async (req, res) => {
  try {
    const allUsers = await user.query("SELECT * FROM user");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a User

app.get("/todos/:id", async (req, res) => {
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

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a tour

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});