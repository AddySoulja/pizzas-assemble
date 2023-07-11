import React from "react";
import crust from "./assets/crust.png";
import eggplant from "./assets/eggplant.png";
import nuggets from "./assets/nuggets.png";
import meatballs from "./assets/meatballs.png";
import spinach from "./assets/spinach.png";
import Toppings from "./components/Toppings";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="contain" style={{ backgroundImage: `url(${crust})` }}>
          <div className="inside">
            <Toppings count={6} topping={spinach} />
            <Toppings count={3} topping={eggplant} />
            <Toppings count={3} topping={nuggets} />
            <Toppings count={3} topping={meatballs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
