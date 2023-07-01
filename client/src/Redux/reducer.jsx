import {GET_COUNTRIES,GET_COUNTRIES_NAME} from "./actions"

let initialState ={
 allCountries:[]
};

function rootReducer (state= initialState,action){
   switch (action.type) {
    case GET_COUNTRIES:
        return {
            ...state,
           allCountries: action.payload
        }
        break;
    case GET_COUNTRIES_NAME:
        return{
            ...state,
           allCountries: action.payload
        }   
   
    default: return state
        break;
   }
}

export default rootReducer;