import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/products/actions";
import {
  cartProductIncrement,
  cartProductDecrement,
} from "../redux/products/actions";

function CartItem({ productId }) {
  const stateData = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const checkStockOfAProduct = stateData.products.filter(
    (item) => item.id == productId
  )[0].product_quantity;
  

  let {
    product_name,
    product_catagory,
    product_image_link,
    product_unit_price,
    id,
  } = stateData.products.filter(
    (productInfo) => productInfo.id == productId
  )[0];

  let { quantity, unit_price } = stateData.cart[id];

  const productDeleteFromCartHandler = (id) => {
   
    dispatch(deleteFromCart(id));
  };
  const cartProductIncrementHandler = (id) => {
    dispatch(cartProductIncrement(id));
  };
  const cartProductDecrementHandler = (id) => {
    dispatch(cartProductDecrement(id));
  };

  return (
    <div>
      {id}
      <div class="cartCard">
        <div class="flex items-center col-span-6 space-x-6">
          {/* <!-- cart image --> */}
          <img class="lws-cartImage" src={product_image_link} alt="product" />
          {/* <!-- cart item info --> */}
          <div class="space-y-2">
            <h4 class="lws-cartName">{product_name}</h4>
            <p class="lws-cartCategory">{product_catagory}</p>
            <p>
              BDT <span class="lws-cartPrice">{product_unit_price}</span>
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/* <!-- amount buttons --> */}
          <div class="flex items-center space-x-4">
            {checkStockOfAProduct == 0 ? (
              <button
                class="lws-incrementQuantity text-slate-600"
                onClick={() => cartProductIncrementHandler(productId)}
                disabled
              >
                <i class="text-lg fa-solid fa-plus"></i>
              </button>
            ) : (
              <button
                class="lws-incrementQuantity"
                onClick={() => cartProductIncrementHandler(productId)}
              >
                <i class="text-lg fa-solid fa-plus"></i>
              </button>
            )}

            <span class="lws-cartQuantity">{quantity}</span>
            {quantity == 0 ? (
              <button
                class="lws-decrementQuantity text-slate-600"
                onClick={() => cartProductDecrementHandler(productId)}
                disabled
              >
                <i class="text-lg fa-solid fa-minus"></i>
              </button>
            ) : (
              <button
                class="lws-decrementQuantity"
                onClick={() => cartProductDecrementHandler(productId)}
              >
                <i class="text-lg fa-solid fa-minus"></i>
              </button>
            )}
          </div>
          {/* <!-- price --> */}
          <p class="text-lg font-bold">
            BDT <span class="lws-calculatedPrice">{quantity * unit_price}</span>
          </p>
        </div>
        {/* <!-- delete button --> */}
        <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button
            class="lws-removeFromCart"
            onClick={() => productDeleteFromCartHandler(id)}
          >
            <i class="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
