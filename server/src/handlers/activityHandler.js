const {createActivity,getActivity}= require("../controllers/activityControllers")

const postActivityHandler = async(req,res)=>{
 
 const {name,difficulty,duration,season,countryId}= req.body;
 try {                        
    const newActivity = await createActivity(
        name,
        difficulty,
        duration,
        season,
        countryId
        
     );
     res.status(200).json(newActivity);
 } catch (error) {
    res.status(400).json({error:error.message})
 }
 
};

const getActivityHandler = async(req,res)=>{
  try {
    const activity = await getActivity();
   res.status(200).json(activity)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
};
module.exports= {postActivityHandler,getActivityHandler}