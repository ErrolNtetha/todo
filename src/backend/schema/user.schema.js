const mongoose = require('mongoose');

// This is a Document === Schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;