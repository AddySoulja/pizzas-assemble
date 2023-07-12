import React from "react";

import Toppings from "../toppings/Toppings";
import crust from "../../assets/ingredients/crust.png";
import eggplant from "../../assets/ingredients/eggplant.png";
import nuggets from "../../assets/ingredients/nuggets.png";
import meatballs from "../../assets/ingredients/meatballs.png";
import spinach from "../../assets/ingredients/spinach.png";
import "./styles.css";
import { Link } from "react-router-dom";

const CustomizePizza = () => {
  return (
    <div className="custom-pizza-wrapper">
      <div className="main-layout">
        <div className="chosen-ingredients-layout">
          <h2>Drag ingredients</h2>
          <div className="chosen-ingredients">
            <img src={nuggets} height={100} width={100} alt="topping" />
            <img src={eggplant} height={100} width={100} alt="topping" />
            <img src={meatballs} height={100} width={100} alt="topping" />
            <img src={eggplant} height={100} width={100} alt="topping" />
            <img src={meatballs} height={100} width={100} alt="topping" />
            <img src={eggplant} height={100} width={100} alt="topping" />
            <img src={meatballs} height={100} width={100} alt="topping" />
            <img src={eggplant} height={100} width={100} alt="topping" />
            <img src={meatballs} height={100} width={100} alt="topping" />
            <img src={eggplant} height={100} width={100} alt="topping" />
            <img src={meatballs} height={100} width={100} alt="topping" />
            <img src={eggplant} height={100} width={100} alt="topping" />
            <img src={meatballs} height={100} width={100} alt="topping" />
          </div>
        </div>
        <div className="display-pizza">
          <h2>Drop ingredients</h2>
          <div className="crust" style={{ backgroundImage: `url(${crust})` }}>
            <div className="inside">
              <Toppings count={6} topping={spinach} />
              <Toppings count={3} topping={eggplant} />
              <Toppings count={3} topping={nuggets} />
              <Toppings count={3} topping={meatballs} />
            </div>
          </div>
        </div>
      </div>
      <div className="btn-layout">
        <Link className="btn-back" to="/items">
          Go back
        </Link>
        <Link className="btn-confirm" to="/">
          Confirm
        </Link>
      </div>
    </div>
  );
};

export default CustomizePizza;
