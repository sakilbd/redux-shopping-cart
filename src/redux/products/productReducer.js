import {
    PRODUCTADDED,
    
} from "./actionTypes";
// import initialState from "./initialState";

const initialState = []
    


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTADDED:
            return [
                ...state,
               action.payload
            ]

        
        default:
            return state;
    }
};

export default productReducer;
