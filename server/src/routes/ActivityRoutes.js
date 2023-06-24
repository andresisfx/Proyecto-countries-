const {Router} =require("express");
const {postActivityHandler, getActivityHandler} = require("../handlers/activityHandler")
const activitiesRouter = Router();

activitiesRouter.post("/",postActivityHandler)
activitiesRouter.get("/",getActivityHandler)


module.exports= activitiesRouter
