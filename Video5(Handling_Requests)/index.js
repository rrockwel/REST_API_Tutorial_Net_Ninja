const express = require('express');

// SEt up express app
const app = express();

// Request Handlers
app.get('/api',function(req, res){
	console.log("GET REQUEST");
	res.send({name: 'Yoshi'});
});


// Set Port for express to listen on.
app.listen(process.env.port || 3000, function(){
	console.log('Listening on port 3000');
});

