
const User = require('../schema/user.schema');

const register_user = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const data = new User({
        firstName,
        lastName,
    })

    // search if the id exists in mock database using the id in the param
    data.save(function(err, req, res) {
        if(err) {
            console.log("Error saving to the database...", err);
        }
        else {
            console.log("Saved")
        }
    })
}

module.exports = register_user;