import React from "react";
import { useSelector } from "react-redux";

function CartItem({productId}) {
    const stateData = useSelector((state)=>state.productReducer)

    let {product_name,product_catagory,product_image_link,product_unit_price}=stateData.products.filter((productInfo)=>productInfo.id==productId)[0]

  return (
    <div>
        
      <div class="cartCard">
        <div class="flex items-center col-span-6 space-x-6">
          {/* <!-- cart image --> */}
          <img
            class="lws-cartImage"
            src={product_image_link}
            alt="product"
          />
          {/* <!-- cart item info --> */}
          <div class="space-y-2">
            <h4 class="lws-cartName">
             { product_name}
            </h4>
            <p class="lws-cartCategory">{product_catagory}</p>
            <p>
              BDT <span class="lws-cartPrice">{product_unit_price}</span>
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/* <!-- amount buttons --> */}
          <div class="flex items-center space-x-4">
            <button class="lws-incrementQuantity">
              <i class="text-lg fa-solid fa-plus"></i>
            </button>
            <span class="lws-cartQuantity">2</span>
            <button class="lws-decrementQuantity">
              <i class="text-lg fa-solid fa-minus"></i>
            </button>
          </div>
          {/* <!-- price --> */}
          <p class="text-lg font-bold">
            BDT <span class="lws-calculatedPrice">2200</span>
          </p>
        </div>
        {/* <!-- delete button --> */}
        <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button class="lws-removeFromCart">
            <i class="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
