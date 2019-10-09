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
var db = require('../db/vacations')
var data = require('../data/vacations')


// Save a single row
db.save(data.SingleRow,function(err, saved){
    if(err){
        console.log("Failed single row save")
        //console.log(err)
        //process.exit(1)
    } else {
        console.log("Success - Save single row - %s",saved.name)
    }
});

// Save multiple rows
db.saveMany(data.MultipleRows,function(err, docs){
    if(err){
        console.log("Failed multiple row insert")
        //console.log(err)
        //process.exit(1)
    } else {
        console.log("Success - Multiple rows inserted - %d",docs.length)
    }
});

// Select vacations with some criteria
var selectCriteria = {validTill : {$gt : new Date()}}
db.select(selectCriteria, function(err, data){
    if(err){
        console.log("Failed to get vacations : %s",criteria)
        console.log(err)
    } else {
        console.log("Successfully selected %d documents for %s", data.length, JSON.stringify(selectCriteria))
    }
});

// Update the vacations
var updateCriteria = {name:'BAHAMAS1000'}
var doc = {description:'UPDATED Desc for TESTING'}
db.update(updateCriteria,doc,function(err, doc){
    if(err){
        console.log("Failed to get update")
        console.log(err)
    } else {
        console.log("Successfully updated with criteria %s", updateCriteria)
    }
})
