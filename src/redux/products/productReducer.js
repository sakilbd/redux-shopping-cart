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

const getCartProductQuantity = (cartState,productId)=>{
    let productCount =0;
    for(let item of cartState){
        if(item.id ==productId){
            productCount= item.quantity+1;
            break;
        }
    }
    return productCount;

}

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
        cart: [
            ...state.cart,
             { 
            id: action.payload.id, 
            quantity: getCartProductQuantity(state.cart,action.payload.id) ,
            unit_price:action.payload.price}],
      };

    default:
      return state;
  }
};

export default productReducer;
