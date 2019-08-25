// "Routes" File
const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// GET a list of ninjas from the database
router.get('/ninjas', function(req, res){
	res.send({type: 'GET'});

});

// Add a new ninja to the database
router.post('/ninjas', function(req, res){
	// Creating new object from model and then saving it
	/*
	let ninja = new Ninja(req.body);
	ninja.save();*/
	/// Equivalent to this single line which does both:
	Ninja.create(req.body).then(function(ninja){
		res.send(ninja);
	});
});

// Update a ninja in the database
router.put('/ninjas/:id', function(req, res){
	res.send({type: 'PUT'});
	
});

// Delete a ninja from the database
router.delete('/ninjas/:id', function(req, res){
	res.send({type: 'DELETE'});
	
});

module.exports = router;