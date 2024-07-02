import React from "react";
import "../stylesheets/CostPopUp.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";

const CostPopUp = (props) => {
  const {
    title,
    amount,
    description,
    balance,
    date,
    onClose,
    handleFav,
    handleDeletingClick,
    favorite,
  } = props;

  const isPositive = String(props.amount).includes("+");
  const divColor = isPositive ? "green" : "red";
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="title-content">
          <h2 className="title-pop">{title}</h2>
          {favorite ? (
            <IconButton className="star-full" onClick={handleFav}>
              <StarIcon />
            </IconButton>
          ) : (
            <IconButton className="star-empty" onClick={handleFav}>
              <StarBorderIcon />
            </IconButton>
          )}
          <IconButton>
            <DeleteForeverIcon onClick={handleDeletingClick} />
          </IconButton>
        </div>
        <p>{description}</p>
        <span className="amount">
          <p className="p-amount-string">Amount:</p>
          <p className={`p-amount-number-${divColor}`}>{amount}</p>
        </span>
        <p>Date: {date}</p>
        <p>Balance: {balance}</p>
        <span className="span-btn">
          <button onClick={onClose} className="btn-close">
            Close
          </button>
        </span>
      </div>
    </div>
  );
};

export default CostPopUp;
