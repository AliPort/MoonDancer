const { db } = require("../dbConnection");


exports.queryToFetchAllProducts = () => {
    return db.manyOrNone(
        `SELECT * FROM products `
    )
}