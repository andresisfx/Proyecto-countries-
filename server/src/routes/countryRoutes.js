const {Router}= require("express");
const countriesRouter= Router();
const {getCountriesHandler,getCoutriesIdHandler} = require("../handlers/countryHandlers")


countriesRouter.get("/",getCountriesHandler);
countriesRouter.get("/:id",getCoutriesIdHandler)
module.exports= countriesRouter; 