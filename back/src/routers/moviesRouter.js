const {Router} = require("express");
const moviesController = require("../controllers/moviesController");

const router = Router()

router.get("/", moviesController.index);

module.exports = router;