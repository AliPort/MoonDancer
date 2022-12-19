const express = require('express');
const axios = require('axios');
const pgp = require('pg-promise')
const { db } = require("./dbConnection");
const app = express()



app.use(express.json());


// const
const { queryToFetchAllUsers } =  require("./queries/index.js")
const { queryToFetchAllTours } = require("./queries/index.js")
const { queryToInsertTourName } = require("./queries/index.js")

const fetchAllUsers = async  () => {
  try {
    const products = await queryToFetchAllUsers()
    console.log('DEM USERS ====>', products)
  } catch (error) {
console.error(error)
}}

const fetchAllTours = async  () => {
  try {
    const products = await queryToFetchAllTours()
    console.log('DEM TOURS ====>', products)
  } catch (error) {
console.error(error)
}}

const addTourName = async (tour_name) => {
  try {
    const products = await queryToInsertTourName('asdflksf')
    console.log(tour_name)
    console.log('Tour name added', products)
  } catch (error) {
    console.error(error)
  }
}

fetchAllUsers()
// addTourName('asdfad')
fetchAllTours()


app.post('/api/tours', async (req, res) => {
  try {
    const data = req.body;
    const db = pgp('connection string');
    const query = 'INSERT INTO tours (tour_name, time_of_day, tour_date) VALUES ($1, $2, $3)';
    const result = await db.none(query, [data.tourName, data.timeOfDay, data.tourDate]);
    res.send({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false });
  }
});

/*

// Express Settings
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//create a user

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
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
*/

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
