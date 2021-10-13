const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.send("I am a route");
})

router.get('/', (req, res) => {
    res.send('<h2> Hello World! </h2>');
})

// Mock Database
const users = [
    { id: 1, name: "Amanda" },
    { id: 2, name: "Sharon" },
]

router.get('/users/:id/blogs/:blogID', (req, res) => {
    const userID = req.params.id;
    const blogId = req.params.blogID;
    console.log(req.params);

    // search if the id exists in mock database using the id in the param
    users.find(user => {
        if(user.id == parseInt(userID)) {
            res.send(`User found: ${user.name}`);
            console.log('User found: ', user.name);
            console.log(req.params);
        }

        // Else if the user is not found..
        else {
            res.send('The ID provided does not match any of our users...');
            console.log('No users found...');
        }
    })
})

module.exports = router