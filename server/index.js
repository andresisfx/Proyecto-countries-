const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const {API_URL} =process.env;
const{Country} = require("./src/db");


const PORT = 3001;

conn
.sync({ force: true })
.then(() => {
   server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
   })
    axios.get("http://localhost:5000/countries").then(({data})=>{
       const countriesApi = [];
        data.forEach((coun) => {
          const newCountry={
            id:coun.cca3,
            name:coun.name.common.toUpperCase(),
            flags:coun.flags.png,
            continents:coun.continents[0],
            capital:Array.isArray(coun.capital) ? coun.capital[0]:"capital does not exist",
            subregion:coun.subregion,
            area:coun.area,
            population:coun.population
          };
          countriesApi.push(newCountry)
        });
         Country.bulkCreate(countriesApi)
         .then(()=>{
          console.log("DB has been loaded")
         })
         .catch((error)=>{
          console.log(error.message)
         });
        
       
    });
  })
.catch((error)=>console.error(error.message))
 
