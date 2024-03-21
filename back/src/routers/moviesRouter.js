const {Router} = require("express");
const moviesController = require("../controllers/moviesController");
const movieValidate = require("../middlewares/validationMiddleware");

const router = Router()

router.get("/", moviesController.getAllMovies);
router.post("/create-movie", movieValidate, moviesController.postMovie);

module.exports = router;