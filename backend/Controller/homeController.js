const homeController = () => {
    return {
        home: (req, res) => {
            res.redirect('/user/signup');
        }
    }
};
module.exports = homeController;