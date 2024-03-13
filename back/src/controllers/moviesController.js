const controllerMovies = {
    index: (req, res) => {
        res.status(200).send({ message: "Welcome to the movies page" });
    },
};

module.exports = controllerMovies;
