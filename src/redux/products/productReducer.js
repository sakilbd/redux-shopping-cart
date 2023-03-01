import {
  PRODUCTADDED,
  ADDTOCART,
  DELETEFROMCART,
  CARTPRODUCTINCREMENT,
  CARTPRODUCTDECREMENT,
} from "./actionTypes";
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

  let productPreviousQuantiy =
    (cartState.cart[productId]?.quantity
      ? cartState.cart[productId].quantity
      : 0) + 1;
  return productPreviousQuantiy;
};

const productUpdateQuantity = (state, productId) => {
  const object = state.products.map((product) => {
    if (product.id == productId) {
      return { ...product, product_quantity: product.product_quantity - 1 };
    }
    c(product);
    return product;
  });
  return object;
};

const deleteProductFromCart = (state, productId) => {
  console.log("delete");
  console.log(state.cart[productId]);
  delete state.cart[productId];
  return { ...state.cart };
};

const cartProductIncrementHandler = (state, productId) => {
  state.cart[productId].quantity = state.cart[productId].quantity + 1;
  let selectedProduct = state.products.map((item) => {
    if (item.id == productId) {
      item.product_quantity--;
    }
    return item;
  });

  return state.cart[productId];
};

const cartProductDecrementHandler = (state, productId) => {
  state.cart[productId].quantity = state.cart[productId].quantity - 1;
  let selectedProduct = state.products.map((item) => {
    if (item.id == productId) {
      item.product_quantity++;
    }
    return item;
  });

  return state.cart[productId];
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
        cart: {
          ...state.cart,
          [action.payload.id]: {
            quantity: getCartProductQuantity(state, action.payload.id)
              ? getCartProductQuantity(state, action.payload.id)
              : 1,
            unit_price: action.payload.price,
          },
        },
        products: [...productUpdateQuantity(state, action.payload.id)],
      };
    case DELETEFROMCART:
      return {
        ...state,
        cart: deleteProductFromCart(state, action.payload),
      };
    case CARTPRODUCTINCREMENT:
      return {
        ...state,

        cart: {
          ...state.cart,
          [action.payload]: cartProductIncrementHandler(state, action.payload),
        },
      };
    case CARTPRODUCTDECREMENT:
      return {
        ...state,

        cart: {
          ...state.cart,
          [action.payload]: cartProductDecrementHandler(state, action.payload),
        },
      };

    default:
      return state;
  }
};

export default productReducer;
