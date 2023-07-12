import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME"
export const GET_ACTIVITIES ="GET_ACTIVITIES"



export function getCountries (){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/countries");
            const allCountries = response.data;
            dispatch({
                type: GET_COUNTRIES,
                payload:allCountries
            })
        } catch (error) {
            alert({error:error.message})
        }
    }
}

export function getCountriesName (name){
    return async function (dispatch){
      try {
        const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
        const countryName = response.data;
        dispatch({
            type: GET_COUNTRIES_NAME,
            payload:countryName
        })
      } catch (error) {
        alert({error:error.message})
      }  

    }
}
export function getActivities () {
  return async function (dispatch){
    try {
        const activities = await axios.get(`http://localhost:3001/activities`) 
        const allActivities = activities.data;
        dispatch({
            type:GET_ACTIVITIES,
            payload:allActivities
        })
    } catch (error) {
        alert({error:error.message})
    }
    
  }
}