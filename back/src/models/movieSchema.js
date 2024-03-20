const moongose  = require("mongoose");

const movieSchema = new moongose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    rate: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0 || value > 10) throw new Error('El rating debe estar entre 0 y 10');
        }
    },
    poster: {
        type: String,
        required: true
    }
});

const Movie = moongose.model("Movie", movieSchema);

module.exports = Movie;