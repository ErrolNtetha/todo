const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000


// Configure environmental variable
require('dotenv').config();

// Router imports
const register = require('./router/router');
const home = require('./router/router');

// Middlewares
app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"]}))
app.use(bodyParser.json())
app.use('/', home)
app.use('/register', register);

app.get('/users', (req, res) => {
    res.send('<h2> These are the users </h2>');
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
