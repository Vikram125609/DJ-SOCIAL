const userModel = require('../src/Models/userModel');
const userController = () => {
    return {
        singup: (req, res) => {
            res.send('FIRST YOU NEED TO REGISTER YOURSELF');
        },
        register: async (req, res) => {
            try {
                const user = new userModel({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: req.body.password
                });
                const registeredUserData = await user.save();
                res.status(200).json({success:true,message:registeredUserData});
            } catch (error) {
                res.status(500).json({success:false,message:error});
            }
        }
    }
};
module.exports = userController;