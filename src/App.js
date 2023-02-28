import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import "./assets/styles/output.css";
import Home from "./components/Home";
import logo from "./assets/images/logo.png";
import Cart from "./components/Cart";
import { useState } from "react";
import Nav from "./components/Nav";

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
        <Nav cartVisibilityHandler={cartVisibilityHandler} homeVisibilityHandler={homeVisibilityHandler} />
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
