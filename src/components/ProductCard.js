import React from "react";
import { useSelector } from "react-redux";

function ProductCard({productInfo}) {
  
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
              BDT <span class="lws-price">{productInfo.product_unit_price}</span>
            </p>
            <p class="productQuantity">
              QTY <span class="lws-quantity">{productInfo.product_quantity}</span>
            </p>
          </div>
          <button class="lws-btnAddToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
