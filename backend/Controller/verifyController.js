const verifyController = () => {
    return {
        verify: (req, res) => {
            const OTP = require('./userController').OTP;
            console.log(OTP);
            res.send('This is the verify controller');
        }
    }
};
module.exports = verifyController;