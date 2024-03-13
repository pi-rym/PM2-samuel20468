const {Router} = require("express");
const homeRouter = require("./homeRouter");
const moviesRouter = require("./moviesRouter");

const router  = Router();

// router.use("/", homeRouter);
router.use("/movies", moviesRouter);

module.exports = router;

