import { Provider } from "react-redux";
import store from "./redux/store";
import "./assets/styles/output.css";
import Home from "./components/Home";
import logo from "./assets/images/logo.png";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  let [homeVisible, setHomeVisible] = useState(true);
  const cartVisibilityHandler = (e)=>{
    e.preventDefault();
    setHomeVisible(false);

  }

  const homeVisibilityHandler  = (e)=>{
    e.preventDefault();
    setHomeVisible(true);
  }

  return (
    <Provider store={store}>
      <>
        <nav class="bg-[#171C2A] py-4">
          <div class="navBar">
            <a href="index.html" >
              <img src={logo} alt="LWS" class="max-w-[140px]" />
            </a>

            <div class="flex gap-4">
              <a href="" class="navHome" id="lws-home" onClick={homeVisibilityHandler}>
                {" "}
                Home{" "}
              </a>
              <a href="" class="navCart" id="lws-cart" onClick={cartVisibilityHandler}>
                <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                <span id="lws-totalCart">0</span>
              </a>
            </div>
          </div>
        </nav>
        <div className={ !homeVisible && "hidden"}>
          <Home />
        </div>
        <div className={ homeVisible && "hidden"}  >
          <Cart />
        </div>
      </>
    </Provider>
  );
}

export default App;
