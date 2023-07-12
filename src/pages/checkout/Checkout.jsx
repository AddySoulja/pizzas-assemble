import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import Pizza from "../../components/pizza/Pizza";
import ButtonLink from "../../components/button/ButtonLink";

const Checkout = () => {
  const { confirmedIngredients } = useSelector((state) => state.ingredients);
  const pizzaName = confirmedIngredients.join(" ");

  const handleOrder = () =>
    alert(`Hooray! Your order named ${pizzaName} pizza has been confirmed.`);

  return (
    <>
      <div className="checkout-wrapper">
        <h1>{pizzaName} pizza</h1>
        <div className="checkout-layout">
          <Pizza addedToppings={confirmedIngredients} />
        </div>
        <div className="btn-layout">
          <ButtonLink path="/customize" primary>
            Customize
          </ButtonLink>
          <ButtonLink onClick={handleOrder} success>
            Order
          </ButtonLink>
          <ButtonLink path="/menu" secondary>
            Recreate
          </ButtonLink>
        </div>
      </div>
    </>
  );
};

export default Checkout;
