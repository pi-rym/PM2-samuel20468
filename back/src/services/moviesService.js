const Movie = require("../models/movieSchema");
const axios = require("axios");
const serviceMovies = {
    getMovies: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            throw error;
        }
    },
    addMovie: async (newMovie) => {
        try {
            const movie = await  Movie.create(newMovie);
            
            return movie._id;
        } catch (error) {
            throw  error;
        }
    },
}

module.exports = serviceMovies;
