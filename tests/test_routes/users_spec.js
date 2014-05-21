var request = require('supertest')
  , express = require('express');

/*
var app = express();

app.get('/users', function(req, res){
  res.send(200, [ { _id: 1, username: 'cool' } ] );
});
*/

var app = require('../test-app');
/*
app.get('/users/1', function(req, res){
  res.send(200, { _id: 1, username: 'cool' } );
});

app.get('/users/cre', function(req, res){
  res.send(200, { _id: 1, username: 'cool' } );
});
*/
beforeEach(function() {
    
    var mongo = require("mongodb");

    // connect to db server
    var mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost/test");
    mongoose.connection.on("open", function() {
        console.log("Connected to Mongoose...");
    });
    
})

afterEach(function() {
    //debugger;
    //var mongoose = app.mongoose;
    //var ex = app.exports;
    
    var mongo = require('mongodb');
    var mongoose = require('mongoose');

    mongoose.disconnect();
    
})

describe('USER Restful', function() {
    describe('GET /users', function(){
      it('should respond with json', function(done){
        request(app)
          .get('/users')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'application/json')
          .expect(function(res) {
            console.log(res.body);
          })
          .expect(200, done);
      })
    })

    describe('GET /users/:id', function(){
      it('should respond with json', function(done){
        request(app)
          .get('/users/537adb604de5a10464c28275')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'application/json')
          .expect(function(res) {
            console.log(res.body);
          })
          .expect(200, done);
      })
    })

    describe('POST /users/', function(){
      it('should respond with json', function(done){
        request(app)
          .post('/users/')
          .set('Accept', 'application/json')
          //.expect('Content-Type', 'application/json')
          .expect(function(res) {
            console.log(res.body);
          })
          .expect(302, done);
      })
    })

    describe('PUT /users/edit/:id', function(){
      it('should respond with json', function(done){
        request(app)
          .put('/users/edit/537c52e244a44ecd42bb19f3')
          .set('Accept', 'application/json')
          .send({'name': 'Hello'})
          .expect('Content-Type', 'application/json')
          .expect(function(res) {
            console.log(res.body);
          })
          .expect(200, done);
      })
    })

})
