const {Router} = require("express");
const moviesController = require("../controllers/moviesController");

const router = Router()

router.get("/", moviesController.getAllMovies);
router.post("/create-movie", moviesController.postMovie);

module.exports = router;