import React from "react";
import "./styles.css";
import toppings from "../../utils/generateTopping";
import { useDispatch } from "react-redux";
import {
  clearIngredients,
  selectAllIngredients,
} from "../../redux/slices/ingredientsSlice";
import Card from "../../components/item-card/Card";
import ButtonLink from "../../components/button/ButtonLink";

const MenuItems = () => {
  const dispatch = useDispatch();

  const handleClearAll = () => dispatch(clearIngredients());
  const handleSelectAll = () => dispatch(selectAllIngredients());

  return (
    <>
      <div className="menu-items-wrapper">
        <h1 className="header">Toppings Menu</h1>
        <div className="menu-items">
          {toppings.map((topping) => (
            <Card key={topping.name} topping={topping} />
          ))}
        </div>
        <button onClick={handleSelectAll} className="btn-clear">
          Select All
        </button>
        <button onClick={handleClearAll} className="btn-clear">
          Remove All
        </button>
        <div className="nav-btns">
          <ButtonLink path="/" primary>
            Guide
          </ButtonLink>
          <ButtonLink path="/customize" secondary>
            Assemble
          </ButtonLink>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
