// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

module.exports = {
    remoteUrl : 'mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu',
    localUrl: 'mongodb://localhost/meanstacktutorials'
};
