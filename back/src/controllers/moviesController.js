const moviesService = require("../services/moviesService");
const controllerMovies = {
    getAllMovies: async (req, res) => {
        try {
            const data = await moviesService.getMovies();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    },
};

module.exports = controllerMovies;
