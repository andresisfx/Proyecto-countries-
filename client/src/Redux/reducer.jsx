import {GET_COUNTRIES,GET_COUNTRIES_NAME,GET_ACTIVITIES} from "./actions"

let initialState ={
 allCountries:[],
 allActivities:[],

};

function rootReducer (state= initialState,action){
   switch (action.type) {
    case GET_COUNTRIES:
    const countriesWithActivities = action.payload.map((country)=>{
        const activitiesCountry = state.allActivities.filter((activity)=>{
             country.activities && country.activities.includes(activity.name)
             
        })
        return {
            ...country,
            activitiesCountry
         }
    })
        return {
            ...state,
           allCountries:countriesWithActivities
        }
       
    case GET_COUNTRIES_NAME:
        return{
            ...state,
           allCountries: action.payload
        } 
    case GET_ACTIVITIES:
        return{
            ...state,
            allActivities:action.payload
        }    
           
   
    default: return state
       
   }
}

export default rootReducer;