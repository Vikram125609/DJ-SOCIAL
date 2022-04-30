const nodemailer = require('nodemailer');
const userModel = require('../src/Models/userModel');
const userController = () => {
    return {
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
        signin: (req, res) => {
            res.send(`This is the signin wala page`);
        },
        postsignin: async (req, res) => {
            const email = req.body.email;
            const user = await userModel.findOne({ email: email });
            if (user) 
            {
                res.status(200).json({ success: true, message: user });
            }
            else
            {
                res.status(400).json({success:false,message:`User Does Not Exist`});
            }
        }
    }
};
module.exports = userController;