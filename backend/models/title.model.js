const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const titleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    count: {
        type: Number,
        required: true
    },
},  {
    timestamps: true,
});

const Title = mongoose.model('Title', titleSchema);

module.exports = Title;