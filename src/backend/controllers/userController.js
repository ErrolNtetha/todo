const User = require('../schema/user.schema'); // Import the user Schema

/*
* Create controllers for routes and export them to userRouter file
* As part of the MVC architecture, here in this project i try to follow that pattern
  where i seperate my routes, controllers and views for readability and mantainability
*/

exports.userList = (req, res) => {
    // Get all the users already in database and list them all in "/users"
    res.send("Users list");
}

// Catch all user data from the form in front-end
exports.register_user = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    /*
    * Get the data from the from the front-end
    * Initialize all Schema field with the data
    */
    const data = new User({
        name: { firstName, lastName },
        email,
        password,
    });

    /* 
    * Save that in the Mongoose
    * Search if the id exists in mock database using the id in the param
    */
    data.save(function(err, req, res) {
        if(err) {
            console.log("Error saving to the database...", err);
        }
        else {
            console.log(data)
        }
    })
}