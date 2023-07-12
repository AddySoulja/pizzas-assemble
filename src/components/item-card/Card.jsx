import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeIngredient,
  setIngredients,
} from "../../redux/slices/ingredientsSlice";
import "./styles.css";

const Card = ({ topping }) => {
  const { list } = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();

  const handleItem = () =>
    list.includes(topping)
      ? dispatch(removeIngredient(topping))
      : dispatch(setIngredients(topping));

  return (
    <div className="item">
      <img
        src={topping.thumbnail}
        height={250}
        width={250}
        alt={topping.name}
        onClick={handleItem}
      />
      <div className="item-text">
        <label htmlFor={topping.name}>{topping.name}</label>
        <input
          type="checkbox"
          name={topping.name}
          id={topping.name}
          value={topping.name || "topping"}
          checked={list.includes(topping)}
          onChange={handleItem}
        />
      </div>
    </div>
  );
};

export default Card;
