import {
    PRODUCTADDED,
    ADDTOCART,
    DELETEFROMCART
   
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
export const deleteFromCart = (productId) => {
    return {
        type: DELETEFROMCART,
        payload: productId,
    };
};


