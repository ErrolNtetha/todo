const mongoose = require('mongoose');
const Schema = mongoose.Schema()

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    occupation: String,
    dateOfBirth: { type: Date, default: Date.now },
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;