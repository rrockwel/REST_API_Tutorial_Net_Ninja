const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// SEt up express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true} );
// Set mongoDB promise to NodeJS Global Promise 
mongoose.Promise = global.Promise;

// Set up static files in 'public' directory
app.use(express.static('public'));

app.use(bodyParser.json());

// Use routes from routes/api.js
// Initialize routes
app.use('/api', require('./routes/api'));

// Error Handling Middleware
app.use(function(err, req, res, next){
	res.status(422).send({error: err.message});
});

// Set Port for express to listen on.
app.listen(process.env.port || 3000, function(){
	console.log('Listening on port 3000');
});

