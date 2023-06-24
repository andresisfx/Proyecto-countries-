const { Router } = require("express");
const countriesRouter= require("./countryRoutes");
const activitiesrouter = require("./ActivityRoutes")
const mainRouter = Router();

mainRouter.use("/countries",countriesRouter);
mainRouter.use("/activities",activitiesrouter)

module.exports = mainRouter;
