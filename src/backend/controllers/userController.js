const User = require('../schema/user.schema');

const home = (req, res) => {
    res.send("Home page!");
}

const register_user = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const data = new User({
        firstName,
        lastName,
        email,
        password,
    })

    // search if the id exists in mock database using the id in the param
    data.save(function(err, req, res) {
        if(err) {
            console.log("Error saving to the database...", err);
        }
        else {
            console.log(data)
        }
    })
}

module.exports =  register_user, home ;