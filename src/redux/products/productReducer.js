import { PRODUCTADDED, ADDTOCART } from "./actionTypes";
// import initialState from "./initialState";

const initialState = {
  products: [],
  cart: [],
};

const getId = (product) => {
  // let maxId = 0
  let maxId = product.products.reduce(
    (maxId, current) => Math.max(maxId, current.id),
    -1
  );

  return maxId + 1;
};

const productReducer = (state = initialState, action) => {
  // let obj = ;
  // obj[id]=1
  switch (action.type) {
    case PRODUCTADDED:
      return {
        ...state,
        products: [...state.products, { ...action.payload, id: getId(state) }],
      };
    case ADDTOCART:
      return {
        ...state,
        cart: [...state.cart, { id: action.payload, quantity: 2 }],
      };

    default:
      return state;
  }
};

export default productReducer;
