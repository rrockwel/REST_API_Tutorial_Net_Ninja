// "Routes" File
const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// GET a list of ninjas from the database
router.get('/ninjas', function(req, res, next){
	// Function to return all ninjas in the database
	/*Ninja.find({}).then(function(ninjas){
		res.send(ninjas);
	});*/
	Ninja.geoNear(
		{type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
		{maxDistance: 100000, spherical: true}
		).then(function(ninjas){
			res.send(ninjas);
		});

});

// Add a new ninja to the database
router.post('/ninjas', function(req, res, next){
	// Creating new object from model and then saving it
	/*
	let ninja = new Ninja(req.body);
	ninja.save();*/
	/// Equivalent to this single line which does both:
	Ninja.create(req.body).then(function(ninja){
		res.send(ninja);
	}).catch(next);
});

// Update a ninja in the database
router.put('/ninjas/:id', function(req, res, next){
	Ninja.findByIdAndUpdate({_id: req.params.id}, req.body, { useFindAndModify: false}).then(function(){
		Ninja.findOne({_id: req.params.id}).then(function(ninja){
		res.send(ninja);
		});
	});	
});

// Delete a ninja from the database
router.delete('/ninjas/:id', function(req, res, next){
	Ninja.findByIdAndRemove({_id: req.params.id},{ useFindAndModify: false}).then(function(ninja){
		res.send(ninja);
	});	
});

module.exports = router;