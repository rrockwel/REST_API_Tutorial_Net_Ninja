const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Geolocation Schema 
const GeoSchema = new Schema({
	type: {
		type: String,
		default: "Point"

	},
	coordinates: {
		type: [Number],
		index: "2dsphere"
	}
});




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
	},
	geometry: GeoSchema

	// Add in Geo Location

});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;