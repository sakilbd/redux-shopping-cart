import {
    PRODUCTADDED,
    ADDTOCART,
    DELETEFROMCART,
    CARTPRODUCTINCREMENT,
    CARTPRODUCTDECREMENT
   
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
export const cartProductIncrement = (productId) => {
    return {
        type: CARTPRODUCTINCREMENT,
        payload: productId,
    };
};

export const cartProductDecrement = (productId) => {
    return {
        type: CARTPRODUCTDECREMENT,
        payload: productId,
    };
};

