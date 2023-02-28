import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";

function Nav({ homeVisibilityHandler, cartVisibilityHandler }) {
  const stateData = useSelector((state) => state.productReducer);
  let totalQuantity = 0;
  for (let [key, value] of Object.entries(stateData.cart)) {
    totalQuantity += value.quantity;
  }

  return (
    <div>
      <nav class="bg-[#171C2A] py-4">
        <div class="navBar">
          <a href="index.html">
            <img src={logo} alt="LWS" class="max-w-[140px]" />
          </a>

          <div class="flex gap-4">
            <a
              href=""
              class="navHome"
              id="lws-home"
              onClick={homeVisibilityHandler}
            >
              {" "}
              Home{" "}
            </a>
            <a
              href=""
              class="navCart"
              id="lws-cart"
              onClick={cartVisibilityHandler}
            >
              <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{totalQuantity}</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
