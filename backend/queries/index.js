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

exports.queryToInsertTourDate = () => {
    return db.none(
        `INSERT `
    )
}