const { db } = require("../dbConnection");


exports.queryToFetchAllTours = () => {
    return db.manyOrNone(
        `SELECT * FROM tours `
    )
}