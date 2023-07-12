import React from "react";
import "./styles.css";
import meatballs from "../../assets/ingredients-thumbnail/meatballs.jpg";
import mushrooms from "../../assets/ingredients-thumbnail/mushrooms.jpg";
import paneer from "../../assets/ingredients-thumbnail/paneer.jpg";
import Card from "../item-card/Card";
import blackOlives from "../../assets/ingredients-thumbnail/blackOlives.jpg";
import basil from "../../assets/ingredients-thumbnail/basil.jpg";
import cheese from "../../assets/ingredients-thumbnail/cheese.jpg";
import eggplant from "../../assets/ingredients-thumbnail/eggplant.jpg";
import garlic from "../../assets/ingredients-thumbnail/garlic.jpg";
import jalepeno from "../../assets/ingredients-thumbnail/jalepeno.jpg";
import mozzarella from "../../assets/ingredients-thumbnail/mozzarella.jpg";
import nuggets from "../../assets/ingredients-thumbnail/nuggets.jpg";
import onion from "../../assets/ingredients-thumbnail/onions.jpg";
import peppers from "../../assets/ingredients-thumbnail/peppers.jpg";
import ricotta from "../../assets/ingredients-thumbnail/ricotta.jpg";
import shawarma from "../../assets/ingredients-thumbnail/shawarma.jpg";
import spinach from "../../assets/ingredients-thumbnail/spinach.jpg";
import tomatoes from "../../assets/ingredients-thumbnail/tomatoes.jpg";
import pineapple from "../../assets/ingredients-thumbnail/pineapple.jpg";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <>
      <div className="menu-items-wrapper">
        <div className="menu-items">
          <Card item={{ src: onion, name: "Onion" }} />
          <Card item={{ src: peppers, name: "Bell peppers" }} />
          <Card item={{ src: pineapple, name: "Pineapple" }} />
          <Card item={{ src: ricotta, name: "Ricotta" }} />
          <Card item={{ src: shawarma, name: "Shawarma" }} />
          <Card item={{ src: spinach, name: "Spinach" }} />
          <Card item={{ src: tomatoes, name: "Tomatoes" }} />
          <Card item={{ src: basil, name: "Basil" }} />
          <Card item={{ src: blackOlives, name: "Black olives" }} />
          <Card item={{ src: cheese, name: "Cheese" }} />
          <Card item={{ src: eggplant, name: "Eggplant" }} />
          <Card item={{ src: garlic, name: "Garlic" }} />
          <Card item={{ src: jalepeno, name: "Jalapeño" }} />
          <Card item={{ src: meatballs, name: "Meatballs" }} />
          <Card item={{ src: mozzarella, name: "Mozzarella" }} />
          <Card item={{ src: mushrooms, name: "Mushrooms" }} />
          <Card item={{ src: nuggets, name: "Chicken nuggets" }} />
          <Card item={{ src: paneer, name: "Paneer" }} />
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
