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
    postMovie: async (req, res) => {
        let movieData = req.body;

        const newMovie = {
            title: movieData.title,
            year: movieData.year,
            director: movieData.director,
            duration: movieData.duration,
            genre: movieData.genre,
            rate: movieData.rate,
            poster: movieData.poster
        };

        try {
            const result = await moviesService.addMovie(newMovie);
            
            return res.status(201).json({message: `La película con el ID ${result} fue añadida`});
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
};

module.exports = controllerMovies;
