import React from "react";
import "./styles.css";
import ButtonLink from "../../components/button/ButtonLink";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="dashboard-layout">
          <h1 className="heading">Pizzas Assemble</h1>
          <div className="guide">
            <p>Welcome to &quot;Pizzas Assemble&quot;</p>
            <p>
              On starting, on the menu page, you will be asked to select all the
              toppings you would like on your pizza.
            </p>
            <p>
              After selecting some of the toppings, you can proceed to assemble
              your custom pizza.
            </p>
            <p>
              Just drag and drop all the toppings you like on the crust and see
              what the product might look like.
            </p>
          </div>
        </div>
        <div className="btn-layout">
          <ButtonLink path="/menu" success>
            Start
          </ButtonLink>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
