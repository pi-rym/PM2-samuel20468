const axios = require("axios");
const serviceMovies = {
    getMovies: async () => {
        try {
            const response = await axios("https://students-api.up.railway.app/movies");
            const data = response.data;
            return data;
        } catch (error) {
            throw error;
        }
    },
}

module.exports = serviceMovies;
