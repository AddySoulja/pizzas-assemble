import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Card from "../item-card/Card";
import toppings from "../../utils/generateTopping";

const MenuItems = () => {
  return (
    <>
      <div className="menu-items-wrapper">
        <div className="menu-items">
          {toppings.map((topping) => (
            <Card key={topping.name} topping={topping} />
          ))}
        </div>
        <div className="nav-btns">
          <Link className="btn-home" to="/">
            Home
          </Link>
          <Link className="btn-customize" to="/customize">
            Assemble
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
