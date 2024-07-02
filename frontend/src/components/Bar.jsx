import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Bar.css";

const Bar = () => {
  return (
    <div className="bar-container">
      <div className="left-side">
        <Link to="/" className="title">
          Cost Manager
        </Link>
      </div>
      <div className="right-side">
        <Link to="/" className="costs">
          Costs
        </Link>
        <Link to="/addCost" className="add-cost">
          Add Cost
        </Link>
        <Link to="/favorites" className="favorites">
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default Bar;
