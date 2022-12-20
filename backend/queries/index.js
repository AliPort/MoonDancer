const { db } = require("../dbConnection");
const pgp = require('pg-promise')

exports.queryToFetchAllUsers = () => {
    return db.manyOrNone(
        `SELECT * FROM users`,
        
    )
}

exports.queryToFetchAllTours = () => {
    return db.manyOrNone(
        `SELECT * FROM tours`
    )
}
// INSERT
exports.queryToInsertTourData = (db, data) => {
    return db.none(
        `INSERT INTO tours (tour_name, time_of_day, tour_date) VALUES ($1, $2, $3)`,
        [data.tourName, data.timeOfDay, data.tourDate]
    );
  }
/*
exports.queryToInsertBayTour = () => {
    return db.none(
        `INSERT INTO tours VALUES ( tour_date, 1991-01-01T06:00:00.000Z)`
    )
}

exports.queryToInsertUsername = () => {
    return db.none(
        `INSERT INTO users VALUES Bay`
    )
}
*/