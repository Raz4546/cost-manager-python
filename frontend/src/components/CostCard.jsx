import React from "react";
import "../stylesheets/CostCard.css";

const CostCard = (props) => {

  const isPositive = String(props.amount).includes("+");
  const colorClass = isPositive ? "positive-amount" : "negative-amount";

  return (
    <div className="cost-card" onClick={props.onClick}>
      <h1 className="title1">{props.title}</h1>
      <div className="middle">
        <div className={`amount-${colorClass}`}>{props.amount}</div>
        <div className="description">{props.description}</div>
      </div>
      <div className="balance">{props.balance}</div>
    </div>
  );
};

export default CostCard;
