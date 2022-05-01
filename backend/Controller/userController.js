const nodemailer = require('nodemailer');
const userModel = require('../src/Models/userModel');
const userController = () => {
    return {
        // Registering the user
        user: async (req, res) => {
            try {
                const _id = req.params.id;
                const user = await userModel.findById(_id);
                res.status(200).json({ success: true, message: user });
            } catch (error) {
                res.status(500).json({ success: true, message: error })
            }
        },
        signup: (req, res) => {
            res.send('FIRST YOU NEED TO REGISTER YOURSELF');
        },
        postsignup: async (req, res) => {
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

                // CODE FOR OTP IS STARTED
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'vikramthelucky43@gmail.com',
                        pass: 'mxgxxyxhwztxjltc'
                    }
                });
                const mailOption = {
                    from: 'vikramthelucky43@gmail.com',
                    to: `vs125609@gmail.com`,
                    subject: 'Sending Email using Node.js',
                    text: `Your OTP IS ${OTP}`
                };
                transporter.sendMail(mailOption, (error, info) => {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log("Email Sent Successfully " + info.response);
                    }
                });
                // Code For OTP IS ENDED

                module.exports.OTP = OTP;
                module.exports.user = user;
                res.redirect('/user/verify');
            } catch (error) {
                res.status(500).json({ success: false, message: error });
            }
        },
        // Login User
        signin: (req, res) => {
            res.send(`This is the signin wala page`);
        },
        postsignin: async (req, res) => {
            try {
                const email = req.body.email;
                const user = await userModel.findOne({ email: email });
                if (user) {
                    res.status(200).json({ success: true, message: user });
                }
                else {
                    res.status(400).json({ success: false, message: `User Does Not Exist` });
                }
            } catch (error) {
                res.status(500).json({ success: false, message: error });
            }
        },
        // Here I am updating the user data
        update: async (req, res) => {
            // Here I am getting the password from the user as a parameter
            try {
                let _id = req.params.id;
                console.log(_id);
                const password = req.params.password;
                console.log(password);
                const userData = await userModel.findById(_id);
                if (userData.password == password) {
                    const user = await userModel.findByIdAndUpdate(_id, req.body);
                    res.status(200).json({ success: true, message: `User Data Updated Successfully` });
                }
                else {
                    res.status(400).json({ success: false, message: `Password is not correct` });
                }
            } catch (error) {
                res.status(500).json({ success: false, message: error });
            }
        }
    }
};
module.exports = userController;