const { db } = require("../dbConnection");


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
exports.queryToInsertTourDate = () => {
    return db.none(
        `INSERT INTO tours (tour.date) VALUES (date) `
    )
}

exports.queryToInsertBayTour = () => {
    return db.none(
        `INSERT INTO tours VALUES ( tour.date, 1991-01-01T06:00:00.000Z)`
    )
}
/*
exports.queryToInsertUsername = () => {
    return db.none(
        `INSERT INTO users VALUES Bay`
    )
}
*/