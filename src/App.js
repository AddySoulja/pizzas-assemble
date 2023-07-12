import React from "react";
import { Outlet } from "react-router-dom";
import kitchen from "./assets/kitchen.jpg";

const App = () => {
  return (
    <div className="wrapper" style={{ backgroundImage: `url(${kitchen})` }}>
      <Outlet />
    </div>
  );
};

export default App;
