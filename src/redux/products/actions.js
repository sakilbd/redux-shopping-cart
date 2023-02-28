import {
    PRODUCTADDED,
   
} from "./actionTypes";

export const productAdd = (productInfo) => {
    return {
        type: PRODUCTADDED,
        payload: productInfo,
    };
};

