/**
 * Simple tests for all DB operations
 * 
 * Adds the test data to the Database = vacation Collection = vacations
 */


// The ../db/setting.js uses the environment variable DB_URI
// Copy the connect string for the mongoDB cluster & paste below
// Format =>  mongodb+srv://admin:<password>@cluster0-46e5h.mongodb.net/test?retryWrites=true&w=majority
const DB_USER = "admin"
const DB_PASSWORD = "admin123"
const DB_NAME = "acmetravel"

process.env.DB_URI = "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@cluster0-46e5h.mongodb.net/"+DB_NAME+"?retryWrites=true&w=majority"

//Test#1  Insert the Vacation data
var db = require('../db/hotels')
var data = require('../data/hotels')

// Insert if argv[2] == insert otherwise select
if (process.argv.length > 2 && process.argv[2] === 'insert') {
    // Save multiple rows
    db.saveMany(data.MultipleRows, function (err, docs) {
        if (err) {
            console.log("Failed multiple row insert")
            console.log(err)
            process.exit(1)
        } else {
            console.log("Success - Multiple rows inserted - %d", docs.length)
            process.exit(0)
        }
    });
} else {

    // Select hotels with some criteria
    var selectCriteria = {}
    var options = {fields:{name:1,type:1,city:1}}
    db.select(selectCriteria, options, function (err, data) {
        if (err) {
            console.log("Failed to get vacations : %s", criteria)
            console.log(err)
            process.exit(1)
        } else {
            console.log("Successfully selected %d documents for %s", data.length, JSON.stringify(selectCriteria))
            console.log(data)
            process.exit(0)
        }
    });
}