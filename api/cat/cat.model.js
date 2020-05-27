const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
    catName: {
        type: String,
        unique: true,
        required: false,
    },
    catTypeOrColor: {
        type: String,
        unique: false,
        required: false,
    },
});

module.exports = catSchema;