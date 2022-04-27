const homeController = () => {
    return {
        home: (req, res) => {
            res.send('This is by using controller')
        }
    }
};
module.exports = homeController;