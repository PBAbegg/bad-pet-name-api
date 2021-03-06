const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    dogName: {
        type: String,
        unique: true,
        required: false,
    },
    dogSpecies:{
        type: String,
        unique: false,
        required: false,
    },
    dogColor: {
        type: String,
        unique: false,
        required: false,
    },
});

module.exports = dogSchema;