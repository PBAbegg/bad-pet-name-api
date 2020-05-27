const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fishSchema = new Schema({
    fishName: {
        type: String,
        unique: true,
        required: false,
    },
    fishTypeOrColor: {
        type: String,
        unique: false,
        required: false,
    },
});

module.exports = fishSchema;