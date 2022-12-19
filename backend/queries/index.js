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
exports.queryToInsertTourName = ( tour_name ) => {
        return db.none(
        `INSERT INTO tours (tour_id(x+=1), tour_name, user_id, guest_id, tour_date, tour_time) VALUES (6, 'tour_name', 2, 2, '1991-01-01T06:00:00.000Z', '1991-01-01T06:00:00.000Z') `
    )
}

exports.queryToInsertBayTour = () => {
    return db.none(
        `INSERT INTO tours VALUES ( tour_date, 1991-01-01T06:00:00.000Z)`
    )
}
/*
exports.queryToInsertUsername = () => {
    return db.none(
        `INSERT INTO users VALUES Bay`
    )
}
*/