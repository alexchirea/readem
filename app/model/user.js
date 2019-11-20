var mongoose = require('mongoose');

var UserModelSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'The first name is mandatory.']
    },
    last_name: {
        type: String,
        required: [true, 'The last name is mandatory.']
    },
    email:  {
        type: String,
        required: [true, 'The email address is mandatory.']
    },
    password:  {
        type: String,
        required: [true, 'The password is mandatory.']
    },
    role: {
        type: String,
        enum: ['Pending validation', 'Banned', 'Member', 'Moderator', 'Admin']
    }
});

module.exports = db.model('UserModel', UserModelSchema);