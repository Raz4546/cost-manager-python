import React, { useState } from "react";
import "../stylesheets/CostPopUp.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const CostPopUp = ({
  id,
  title,
  amount,
  description,
  balance,
  date,
  favorite,
  handleFav,
  handleDeletingClick,
  handleEditingClick,
  onClose,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedAmount, setEditedAmount] = useState(amount);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedDate, setEditedDate] = useState(date);
  const [editedBalance, setEditedBalance] = useState(balance);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleEditingClick({
      id, 
      title: editedTitle,
      amount: editedAmount,
      description: editedDescription,
      date: editedDate,
      balance: editedBalance,
      favorite,
    });
    setIsEditing(false);
  };

  const isPositive = String(amount).includes("+");
  const divColor = isPositive ? "green" : "red";

  return (
    <div className="popup-edit">
      <div className="popup-content">
        <div className="title-content">
          {isEditing ? (
            <div>
              <span className="input-title-span2">
                <h1 className="input-title-text">Title:</h1>
                <input
                  className="input-title-field"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              </span>
              <span className="intput-amount-span">
                <h1 className="input-amount-text">Amount:</h1>
                <input
                  className="input-amount-field"
                  type="number"
                  value={editedAmount}
                  onChange={(e) => setEditedAmount(e.target.value)}
                />
              </span>
              <span className="input-description-span2">
                <h1 className="input-description-text">Description:</h1>
                <input
                  className="input-description-field"
                  type="text"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
              </span>
              <span className="input-date-span2">
                <h1 className="input-date-text">Date:</h1>
                <input
                  className="input-date-field"
                  type="date"
                  value={editedDate}
                  onChange={(e) => setEditedDate(e.target.value)}
                />
              </span>
              <span className="span-btn">
                <button className="btn-edit" onClick={handleSaveClick}>Save</button>
                <button onClick={onClose} className="btn-edit">Close</button>
              </span>
            </div>
          ) : (
            <>
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
              <IconButton onClick={() => handleDeletingClick(id)}>
                <DeleteForeverIcon />
              </IconButton>
              <IconButton onClick={handleEditClick}>
                <EditIcon />
              </IconButton>
            </>
          )}
        </div>
        {!isEditing && (
          <>
            <p>{description}</p>
            <span className="amount">
              <p className="p-amount-string">Amount:</p>
              <p className={`p-amount-number-${divColor}`}>{amount}</p>
            </span>
            <p>Date: {date}</p>
            <span className="span-btn">
              <button onClick={onClose} className="btn-close">Close</button>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default CostPopUp;
