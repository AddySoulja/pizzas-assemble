import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { setIngredients } from "../../redux/slices/ingredientsSlice";
const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => dispatch(setIngredients(item));
  return (
    <div className="item">
      <img
        src={item.thumbnail}
        height={250}
        width={250}
        alt={item.name}
        onClick={handleAddItem}
      />
      <div className="item-text">
        <p>{item.name}</p>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Card;
