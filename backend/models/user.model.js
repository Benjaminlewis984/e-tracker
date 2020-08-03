const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        // trim takes white space off the end of the String
        trim: true,
        minlength: 3
    },
}, {
    // creates fields for when the user is created and/or modified
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;