const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Ninja Schema & Model
const NinjaSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	},
	rank: {
		type: String
	},
	availability: {
		type: Boolean,
		default: false
	}

	// Add in Geo Location

});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;