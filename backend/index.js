
const { queryToFetchAllUsers } =  require("./queries/index.js")
const { queryToFetchAllTours } = require("./queries/index.js")

const fetchAllUsers = async  () => {
    const products = await queryToFetchAllUsers()
    console.log('DEM USERS ====>', products)
}


const fetchAllTours = async () => {
  const products = await queryToFetchAllTours()
  console.log('DEM TOURS ====>', products)
}


fetchAllUsers()
fetchAllTours()
fetchAllUsers()




// Express Settings
// app.use(cors());
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
/* app.use(bodyParser.json());

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

app.use(express.urlencoded({ extended: true }));
// app.use({ queryToFetchAllProducts }, require('./controllers/tours'))
// app.use({ queryToFetchAllProducts }, require('./controllers/users'))

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
*/