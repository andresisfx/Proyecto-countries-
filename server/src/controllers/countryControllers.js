const {Country,Activity}= require("../db");
const Sequelize = require("sequelize");


const getCountryByName = async(name)=>{
  const countryNameDB = await Country.findAll({
    where:{
        name:{
            [Sequelize.Op.iLike]: `%${name.toLowerCase()}%`
        }
    },
    include:Activity
});
return [...countryNameDB];
}
const getAllCountries = async()=>{
 const allCountries = await Country.findAll({
  include:Activity,
 })
 return [...allCountries];
};

const getCountryById = async(id)=>{
    const findCountryId = await Country.findByPk(id.toUpperCase(),{
      atributes:[
        "id",
      "name",
      "flags",
      "continents",
      "capital",
      "subregion",
      "population",
      "area"
    ] ,
     include:Activity,
    })
    return findCountryId
        
}
module.exports= {getCountryByName,getAllCountries,getCountryById}