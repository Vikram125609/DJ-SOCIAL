const homeController = () => {
    return {
        home: (req, res) => {
            res.redirect('/signup');
        },
        signup: (req, res) => {
            res.send('This is signup route');
        }
    }
};
module.exports = homeController;