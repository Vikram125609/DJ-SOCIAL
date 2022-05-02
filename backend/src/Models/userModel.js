const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    followers: {
        type: [String],
        default: []
    }
}, { timestamps: true });
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;