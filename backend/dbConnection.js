require('dotenv').config();
const { ConnectionString } = require('connection-string');

const initOptions = {
  // Capitalizes all SQL generated
  capSQL: true,
  // global event notification;
  error(error, e) {
    if (e.cn) {
      // A connection-related error;

      // Connections are reported back with the password hashed,
      // for safe errors logging, without exposing passwords.
      console.log('CN:', e.cn);
      console.log('EVENT:', error.message || error);
    }
  },
  // this is to be commited for debugging purposes, but left commented out until you need it
  // if un-commented, it will print out the resulting query when any query is ran
  query(e) {
    console.log(e.query);
  },
};
const pgp = require('pg-promise')(initOptions);

// // Parse the connection string into an object
// const cnObj = new ConnectionString(process.env.DATABASE_URL);

// DB Connection String
const cn = {
  host: 'localhost',
  port: 5433,
  database: 'flush',
  user: 'Eldoza',
  password: '',
  // TODO: This is likely very unsecure and should be fixed
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

const db = pgp(cn);

// Connect to DB
db.connect()
  .then(obj => {
    // After query runs succesfully, disconnect
    obj.done();
  })
  .catch(error => {
    console.log('ERROR FROM DB:========>', error.message);
  });

module.exports = { db, pgp };