const userModel = require('../src/Models/userModel');
const userController = () => {
    return {
        signup: (req, res) => {
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
                let OTP = Math.random() * 1000001;
                OTP = Math.ceil(OTP);
                module.exports.OTP =  OTP;
                res.redirect('/user/verify');
            } catch (error) {
                res.status(500).json({success:false,message:error});
            }
        },
        login:async (req,res)=>{
            try {
                
            } catch (error) {
                res.status(500).json({success:false,message:error});
            }
        }
    }
};
module.exports = userController;