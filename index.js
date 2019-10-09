/**
 * Launches the API Listener
 * 
 * Checkout the API implementation in api/v1/vacations.js
 */

// Provide the DB Parameters below
// Copy & paste from the tests/TestDbOps.js *OR* edit
// NOTE: your cluster location will be different than the one below!!!
const DB_USER = "admin"
const DB_PASSWORD = "admin123"
const DB_NAME = "acmetravel"
process.env.DB_URI = "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@cluster0-46e5h.mongodb.net/"+DB_NAME+"?retryWrites=true&w=majority"


var express = require('express')
var bodyParser = require('body-parser')

var router = express.Router();
require('./api/v1/vacations')(router);

// Create the express app
app = express();
// Setup the body parser
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());//{type: '*/*'}));

// Setup the app to use the router
app.use(router);

// Start the listener
app.listen(3000);
console.log('Listening on 3000')

