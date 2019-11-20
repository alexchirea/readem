const userRepository = require('../repositories/userRepository');
const UserModel = require('../model/user');

module.exports = {

    register: (req, res) => {
        const userReq = req.body;
        let user = new UserModel({
            first_name: userReq.first_name,
            last_name: userReq.last_name,
            email: userReq.email,
            password: userReq.password,
        });
        var savedUser = userRepository.create(user);
        if (savedUser == null) {
            res.send('There was a problem while creating your account.');
        } else {
            res.json(savedUser);
        }
    }

};