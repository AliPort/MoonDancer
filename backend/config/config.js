require('dotenv').config()

module.exports = {
  "development": {
    "username": "postgres",
    "password": "Digger32!",
    "database": "MoonDancer",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "Digger32!",
    "database": "MoonDancer_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "Digger32!",
    "database": "MoonDancer_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
