import {GET_COUNTRIES,GET_COUNTRIES_NAME,GET_ACTIVITIES} from "./actions"

let initialState ={
 allCountries:[],
 allActivities:[],

};

function rootReducer (state= initialState,action){
   switch (action.type) {
    case GET_COUNTRIES:
        
        return {
            ...state,
           allCountries: action.payload
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