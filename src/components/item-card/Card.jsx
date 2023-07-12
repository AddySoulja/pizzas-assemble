import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { setIngredients } from "../../redux/slices/ingredientsSlice";
const Card = ({ topping }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => dispatch(setIngredients(topping));
  return (
    <div className="item">
      <img
        src={topping.thumbnail}
        height={250}
        width={250}
        alt={topping.name}
        onClick={handleAddItem}
      />
      <div className="item-text">
        <p>{topping.name}</p>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Card;
