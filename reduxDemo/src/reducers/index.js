import  cartReducer  from "./cartReducer"; 
import productReducer from "./productReducer"; 
import { combineReducers } from "redux";

const allReducer = {
    productReducer,
    cartReducer   
};

const rootReducer = combineReducers(allReducer);

export default rootReducer;