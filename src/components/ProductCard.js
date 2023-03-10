import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/products/actions";

function ProductCard({ productInfo }) {
  let stateData = useSelector((state) => state.productReducer);
  let dispatch = useDispatch();
  // let [quantity,setQuantity]=useState()

  // setQuantity(productInfo.product_quantity);
  const addToCartHandler = (e, price) => {
    dispatch(addToCart({ id: e.target.value, price: price }));
  };
  return (
    <div>
      <div class="lws-productCard">
        <img
          class="lws-productImage"
          src={productInfo.product_image_link}
          alt="product"
        />
        <div class="p-4 space-y-2">
          <h4 class="lws-productName">{productInfo.product_name}</h4>
          <p class="lws-productCategory">{productInfo.product_catagory}</p>
          <div class="flex items-center justify-between pb-2">
            <p class="productPrice">
              BDT{" "}
              <span class="lws-price">{productInfo.product_unit_price}</span>
            </p>
            <p class="productQuantity">
              QTY{" "}
              <span class="lws-quantity">{productInfo.product_quantity}</span>
            </p>
          </div>
          {productInfo.product_quantity == 0 ? (
            <button
            disabled
              class="lws-btnAddToCart"
              value={productInfo.id}
              onClick={(e) =>
                addToCartHandler(e, `${productInfo.product_unit_price}`)
              }
            >
              Add To Cart
            </button>
          ) : (
            <button  class="lws-btnAddToCart" value={productInfo.id} onClick={(e)=>addToCartHandler(e,`${productInfo.product_unit_price}`)} >Add To Cart</button>

          )}
          {/* <button
            class="lws-btnAddToCart"
            value={productInfo.id}
            onClick={(e) =>
              addToCartHandler(e, `${productInfo.product_unit_price}`)
            }
          >
            Add To Cart
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
