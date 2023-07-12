import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Toppings from "../toppings/Toppings";
import crust from "../../assets/ingredients/crust.png";
import DraggableCard from "../drag-card/DraggableCard";

const CustomizePizza = () => {
  const { list } = useSelector((state) => state.ingredients);
  const [addedToppings, setAddedToppings] = useState([]);

  useEffect(() => {
    console.log("In store: ", list);
  }, [list]);
  return (
    <div className="custom-pizza-wrapper">
      <div className="main-layout">
        <div className="chosen-ingredients-layout">
          <h2>Drag ingredients</h2>
          <div className="chosen-ingredients">
            {list.map((item) => (
              <DraggableCard key={item.name} item={item} />
            ))}
          </div>
        </div>
        <div className="display-pizza">
          <h2>Drop ingredients</h2>
          <div className="crust" style={{ backgroundImage: `url(${crust})` }}>
            <div className="inside">
              {addedToppings.map((item) => (
                <Toppings key={item.name} count={4} topping={item} />
              ))}
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
