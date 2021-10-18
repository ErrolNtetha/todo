const mongoose = require('mongoose');

 
/*
* This is a Schema - a.k.a Document
* Define all possible fields for a user in the website
*/
const userSchema = new mongoose.Schema({
    name: { firstName: { type: String, required: true, }, lastName: { type: String, required: true, }, },
    email: { type: String, required: [true, 'Please provide email address!'], },
    password: { type: String, min: 8, required: true, },
    description: String,
    age: { type: Number, min: [16, 'Too young!'], },
    gender: { type: String, enum: ['Male', 'Female'], },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;