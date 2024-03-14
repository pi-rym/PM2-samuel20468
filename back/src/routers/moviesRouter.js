const {Router} = require("express");
const moviesController = require("../controllers/moviesController");

const router = Router()

router.get("/", moviesController.getAllMovies);

module.exports = router;