const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000

// Configure environmental variable
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('<h2> Hello World! </h2>');
}) 

// Connect using the string on .env
const url = process.env.URL
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection
db.once("open", err => {
    if(err) {
        console.log("Error connecting to MongoDB...")
    }
    return console.log("Connection to MongoDB has been successfully established...")
})

app.listen(PORT, err => {
    if(err) {
        console.log("Connection failed: ", err)
    }
    
    return console.log("Connection opened on port:", PORT)
});
