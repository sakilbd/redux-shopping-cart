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

export const addToCart = (productId) => {
    return {
        type: ADDTOCART,
        payload: productId,
    };
};


