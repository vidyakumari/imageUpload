const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    file: {
         type: String,
         required: true
    },
    filename: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
}
)
module.exports = mongoose.model('image', imageSchema);
