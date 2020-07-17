const router = require('express').Router();
// requiring the mongoose model
let User = require('../models/user.model');

// creating the first endpoint that handles http get requests for root url
router.route('/').get((req, res) =>{
    // .find is a mongoose method that finds a list of all users from the db. Returns a promise
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('ERROR: ' + err));
});

// adds a new user by username
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    // .save() saves information into the database
    newUser.save()
    .then(() => res.json('A new user has been added'))
    .catch(err => res.status(400).json('ERROR: ' + err));
});

module.exports = router;