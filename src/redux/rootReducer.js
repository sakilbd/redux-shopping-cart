import { combineReducers } from "redux";
import productReducer from "./products/productReducer";

const rootReducer = combineReducers({
    productReducer: productReducer,
   
});

export default rootReducer;
