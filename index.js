/**
 * Simple tests for all DB operations
 * 
 * Adds the test data to the Database = vacation Collection = vacations
 */

// Setup the DB_URI
process.env.DB_URI = require("./db/clouddb").DB_URI

var express = require('express')
var bodyParser = require('body-parser')



var router = express.Router();

// setup the vacations api
require('./api/v1/vacations')(router);

// setup the hotels api
require('./api/v1/hotels')(router);

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

