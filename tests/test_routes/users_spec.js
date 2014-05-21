var request = require('supertest')
  , express = require('express');

var app = express();

app.get('/users', function(req, res){
  res.send(200, { username: 'cool' });
});


describe('GET /user', function(){
  it('should respond with json', function(done){
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})
