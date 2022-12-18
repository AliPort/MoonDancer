
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
// app.use({ queryToFetchAllProducts }, require('./controllers/tours'))
// app.use({ queryToFetchAllProducts }, require('./controllers/users'))

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
*/
