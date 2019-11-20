const userModel = require('../model/user');

module.exports = {

    create: (user) => {
        user.save((error) => {
            if (error) {
                return null;
            }
        });
        var savedUser = userModel.findOne({ 'email': user.email });
        return savedUser;
    }


}
