const express = require('express');

// SEt up express app
const app = express();

// Use routes from routes/api.js
// Initialize routes
app.use('/api', require('./routes/api'));

// Set Port for express to listen on.
app.listen(process.env.port || 3000, function(){
	console.log('Listening on port 3000');
});

