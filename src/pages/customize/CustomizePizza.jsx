import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DraggableCard from "../../components/drag-card/DraggableCard";
import ButtonLink from "../../components/button/ButtonLink";
import Pizza from "../../components/pizza/Pizza";
import { setConfirmedIngredients } from "../../redux/slices/ingredientsSlice";
import "./styles.css";

const CustomizePizza = () => {
  const { list, confirmedIngredients } = useSelector(
    (state) => state.ingredients
  );
  const [addedToppings, setAddedToppings] = useState(
    confirmedIngredients || []
  );

  const dispatch = useDispatch();
  const handleConfirmOrder = () =>
    dispatch(setConfirmedIngredients(addedToppings));

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
          <Pizza
            addedToppings={addedToppings}
            setAddedToppings={setAddedToppings}
          />
        </div>
      </div>
      <div className="btn-layout">
        <ButtonLink primary path="/menu">
          Toppings
        </ButtonLink>
        <ButtonLink onClick={handleConfirmOrder} path="/checkout" success>
          Confirm
        </ButtonLink>
      </div>
    </div>
  );
};

export default CustomizePizza;
