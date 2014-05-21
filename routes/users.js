var express = require('express');
var router = express.Router();
var userModel = require('../models/users.js');

/* GET users listing. */
router.get('/', function(req, res) {
    userModel.User.find({}, function(err, data){
        if(err)
            res.json("Error: " + err);
        res.json(data);
    });
});

// Should be `router.post(...`
router.post('/', function(req, res) {
    var user = userModel.User({username: 'cool', isPublic: true});
    user.save(function(err, data){
        if(err)
            res.json("Error: " + err);
        res.redirect('/users');
    });
});

router.get('/:id', function(req, res) {
    userModel.User.find({_id: req.params.id}, function(err, data) {
        if(err)
            res.json('Error: ' + err);
        res.json(data);
    });
});

// Should be `router.put(...`
router.put('/edit/:id', function(req, res) {
    userModel.User.find({_id: req.params.id}, function(err, data) {
        if(err)
            res.json('Error: ' + err);

        //TODO: Do shit with setting all the values of the request
        res.json(data);
    });
});

// Should be `router.delete(...`
router.delete('/delete/:id', function(req, res) {
    userModel.User.find({_id: req.params.id}).remove(function(err, data) {
        if(err)
            res.json('Error: ' + err);
        res.redirect('/users');
    });
});


router.post('/login', function(req, res) {
    userModel.User.find({_id: req.params.id}, function(err, data) {
        if(err)
            res.json('Error: ' + err);
        res.json(data);
    });
});


router.post('/logout', function(req, res) {
    userModel.User.find({_id: req.params.id}, function(err, data) {
        if(err)
            res.json('Error: ' + err);
        res.json(data);
    });
});

module.exports = router;
