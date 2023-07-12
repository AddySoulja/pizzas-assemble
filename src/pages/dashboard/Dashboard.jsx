import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <Link className="btn-start" to="/items">
          Start
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
