import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Card from "../item-card/Card";
import meatballs from "../../assets/ingredients-thumbnail/meatballs.jpg";
import meatballsIcon from "../../assets/ingredients/meatballs.png";
import mushrooms from "../../assets/ingredients-thumbnail/mushrooms.jpg";
import mushroomsIcon from "../../assets/ingredients/mushrooms.png";
import paneer from "../../assets/ingredients-thumbnail/paneer.jpg";
import paneerIcon from "../../assets/ingredients/paneer.png";
import blackOlives from "../../assets/ingredients-thumbnail/blackOlives.jpg";
import blackOlivesIcon from "../../assets/ingredients/black-olives.png";
import basil from "../../assets/ingredients-thumbnail/basil.jpg";
import basilIcon from "../../assets/ingredients/basil.png";
import cheese from "../../assets/ingredients-thumbnail/cheese.jpg";
import cheeseIcon from "../../assets/ingredients/cheese.png";
import eggplant from "../../assets/ingredients-thumbnail/eggplant.jpg";
import eggplantIcon from "../../assets/ingredients/eggplant.png";
import garlic from "../../assets/ingredients-thumbnail/garlic.jpg";
import garlicIcon from "../../assets/ingredients/garlic.png";
import jalepeno from "../../assets/ingredients-thumbnail/jalepeno.jpg";
import jalepenoIcon from "../../assets/ingredients/jalepeno.png";
import mozzarella from "../../assets/ingredients-thumbnail/mozzarella.jpg";
import mozzarellaIcon from "../../assets/ingredients/mozarella.png";
import nuggets from "../../assets/ingredients-thumbnail/nuggets.jpg";
import nuggetsIcon from "../../assets/ingredients/nuggets.png";
import onion from "../../assets/ingredients-thumbnail/onions.jpg";
import onionIcon from "../../assets/ingredients/onions1.png";
import peppers from "../../assets/ingredients-thumbnail/peppers.jpg";
import peppersIcon from "../../assets/ingredients/red-peppers.png";
import ricotta from "../../assets/ingredients-thumbnail/ricotta.jpg";
import ricottaIcon from "../../assets/ingredients/ricotta.png";
import shawarma from "../../assets/ingredients-thumbnail/shawarma.jpg";
import shawarmaIcon from "../../assets/ingredients/shawarma.png";
import spinach from "../../assets/ingredients-thumbnail/spinach.jpg";
import spinachIcon from "../../assets/ingredients/spinach.png";
import tomatoes from "../../assets/ingredients-thumbnail/tomatoes.jpg";
import tomatoesIcon from "../../assets/ingredients/tomatoes.png";
import pineapple from "../../assets/ingredients-thumbnail/pineapple.jpg";
import pineappleIcon from "../../assets/ingredients/pineapple.png";

const MenuItems = () => {
  return (
    <>
      <div className="menu-items-wrapper">
        <div className="menu-items">
          <Card
            item={{
              thumbnail: onion,
              name: "Onion",
              src: onionIcon,
            }}
          />
          <Card
            item={{
              thumbnail: peppers,
              name: "Bell peppers",
              src: peppersIcon,
            }}
          />
          <Card
            item={{
              thumbnail: pineapple,
              name: "Pineapple",
              src: pineappleIcon,
            }}
          />
          <Card
            item={{
              thumbnail: ricotta,
              name: "Ricotta",
              src: ricottaIcon,
            }}
          />
          <Card
            item={{
              thumbnail: shawarma,
              name: "Shawarma",
              src: shawarmaIcon,
            }}
          />
          <Card
            item={{
              thumbnail: spinach,
              name: "Spinach",
              src: spinachIcon,
            }}
          />
          <Card
            item={{
              thumbnail: tomatoes,
              name: "Tomatoes",
              src: tomatoesIcon,
            }}
          />
          <Card
            item={{
              thumbnail: basil,
              name: "Basil",
              src: basilIcon,
            }}
          />
          <Card
            item={{
              thumbnail: blackOlives,
              name: "Black olives",
              src: blackOlivesIcon,
            }}
          />
          <Card
            item={{
              thumbnail: cheese,
              name: "Cheese",
              src: cheeseIcon,
            }}
          />
          <Card
            item={{
              thumbnail: eggplant,
              name: "Eggplant",
              src: eggplantIcon,
            }}
          />
          <Card
            item={{
              thumbnail: garlic,
              name: "Garlic",
              src: garlicIcon,
            }}
          />
          <Card
            item={{
              thumbnail: jalepeno,
              name: "Jalapeño",
              src: jalepenoIcon,
            }}
          />
          <Card
            item={{
              thumbnail: meatballs,
              name: "Meatballs",
              src: meatballsIcon,
            }}
          />
          <Card
            item={{
              thumbnail: mozzarella,
              name: "Mozzarella",
              src: mozzarellaIcon,
            }}
          />
          <Card
            item={{
              thumbnail: mushrooms,
              name: "Mushrooms",
              src: mushroomsIcon,
            }}
          />
          <Card
            item={{
              thumbnail: nuggets,
              name: "Chicken nuggets",
              src: nuggetsIcon,
            }}
          />
          <Card
            item={{
              thumbnail: paneer,
              name: "Paneer",
              src: paneerIcon,
            }}
          />
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
