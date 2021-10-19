const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Declare an environmental variable
const PORT = process.env.PORT || 5000;


// Configure environmental variable
require('dotenv').config();

// Router imports
const register_user = require('./router/usersRouter');
const userList = require('./router/usersRouter');

// Middlewares
app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"]}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes and their callback functions defined in as "controllers"
app.use('/register', register_user);
app.use('/users', userList);









// Connect using the string on .env
const url = process.env.URL

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection

// Once the connection is open...
connection.once("open", err => {
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
