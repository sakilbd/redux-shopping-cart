import { PRODUCTADDED, ADDTOCART } from "./actionTypes";
// import initialState from "./initialState";
const c = console.log.bind(console);
const initialState = {
  products: [],
  cart: {},
};

const getId = (product) => {
  // let maxId = 0
  let maxId = product.products.reduce(
    (maxId, current) => Math.max(maxId, current.id),
    -1
  );
  return maxId + 1;
};

const getCartProductQuantity = (cartState, productId) => {
  // c("quantity :",productId);
  // c(cartState.cart[productId]);
  
  let productPreviousQuantiy =(cartState.cart[productId]?.quantity ?cartState.cart[productId].quantity:0)+1
  return productPreviousQuantiy
};

const productUpdateQuantity =(state,productId) =>{

  const object = state.products.map(product=>{
    if(product.id == productId){
      return {...product,product_quantity:product.product_quantity-1}
    }
    c(product);
    return product
  })
return object;
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
        cart: {
          ...state.cart,
          [action.payload.id]: {
            quantity: getCartProductQuantity(state, action.payload.id)?getCartProductQuantity(state, action.payload.id):1,
            unit_price: action.payload.price
          },
        },
        products:[
         
          ...productUpdateQuantity(state,action.payload.id)
        ]

      };

    default:
      return state;
  }
};

export default productReducer;
