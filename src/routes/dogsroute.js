const {Router} = require("express");
const {getDogs, dogsById, dogsByName} = require("../controllers/getDogs");
const { postDog } = require("../controllers/postDogs");

const dogsRouter = Router();

dogsRouter.get("/", getDogs)
dogsRouter.get("/byname", dogsByName)
dogsRouter.get("/:id", dogsById)
dogsRouter.post("/", postDog)



module.exports = dogsRouter;