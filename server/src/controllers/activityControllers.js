const {Activity,Country} = require("../db.js");


const createActivity = async(
    name,
    dificult,
    duration,
    season,
    countryId,
    
)=>{
    try {
       const newActivity =await Activity.create({
        name,
        dificult,
        duration,
        season
       })

       const countries = await Country.findByPk(countryId);
       await newActivity.setCountries(countries)
      return newActivity;
    } catch (error) {
        throw new Error(error.message)
    }
};

const getActivity = async()=>{
 try {
    const activities =await Activity.findAll({
        where:{
            model:Country
        }
    })
    return activities
 } catch (error) {
    throw new Error(error.message)
 }  
};

module.exports= {createActivity,getActivity}

