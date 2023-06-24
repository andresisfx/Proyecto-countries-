const {getCountryByName,getAllCountries,getCountryById} = require("../controllers/countryControllers")


const getCountriesHandler = async(req,res)=>{
    const {name} = req.query
   try {
    let allCountries;
    if(name){
     allCountries = await getCountryByName(name);
   }else {
    allCountries = await  getAllCountries();
   }
    if(!allCountries.length){
     res.status(400).json({message:"the name doesn`t match"})
   }else{
    res.status(200).json(allCountries)
   }
   } catch (error) {
     res.status(400).json({error:error.message})
   }
};

const getCoutriesIdHandler = async(req,res)=>{
    const {id} = req.params
    try {
        if(id){
        const countryById = await getCountryById(id);
        res.status(200).json(countryById);
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}
module.exports ={getCountriesHandler,getCoutriesIdHandler}
