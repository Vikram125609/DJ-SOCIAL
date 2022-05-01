const nodemailer = require('nodemailer');
const verifyController = () => {
    return {
        verify: (req, res) => {
            res.send(`This is the getverify controller`);
        },
        postverify: async (req, res) => {
            const OTP = require('./userController').OTP;
            const user = require('./userController').user;
            if (parseInt(req.body.OTP) == parseInt(OTP)) {
                await user.save();
                res.status(200).json({ success: true, message: `User Registered Successfully` });
            }
            else {
                res.status(400).json({ success: false, message: `Invalid OTP` });
            }
        }
    }
};
module.exports = verifyController;