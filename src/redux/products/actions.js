import {
    PRODUCTADDED,
    ADDTOCART
   
} from "./actionTypes";

export const productAdd = (productInfo) => {
    return {
        type: PRODUCTADDED,
        payload: productInfo,
    };
};

export const addToCart = (cartInfo) => {
    return {
        type: ADDTOCART,
        payload: cartInfo,
    };
};


