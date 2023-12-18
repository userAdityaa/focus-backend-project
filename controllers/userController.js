const userController = {
    home: (req, res) => {
        res.send("Hello Home Page");
    },
    about: (req, res) => {
        res.send("Hello About section");
    }
};

module.exports = userController;