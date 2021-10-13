const mongoose = require('mongoose');
const Schema = mongoose.Schema()

// This is a Document === Schema
const userSchema = new Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    occupation: String,
    dateOfBirth: { type: Date, default: Date.now },
});

const userModel = mongoose.model('User', userSchema);

// Create a document
const add = new userModel({
    name: {
        firstName: "Mphumeleli",
        lastName: "Ntetha",
    },
    occupation: "Student",
})

// Check if data was saved and log the object, else catch an error
add.save()
    .then(response => console.log("Details saved successfully... ", response))
    .catch(err => console.log("Error saving to the database: ", err))

module.exports = userModel;