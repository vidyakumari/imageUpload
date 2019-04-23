const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    url: {
		type: String,
		required: true
	},
	fileName : {
		type: String,
		required: true
	},
	imageType: {
		type: String,
		required: true
	}
}
)
module.exports = mongoose.model('image', imageSchema);
