const verifyController = () => {
    return {
        verify: (req, res) => {
            res.send('This is the verify controller');
        }
    }
};
module.exports = verifyController;