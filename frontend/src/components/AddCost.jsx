import React, { useState } from "react";
import axios from "axios";
import "../stylesheets/AddCost.css";

const AddCost = () => {
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    amount: "",
    balance: "",
    date: new Date().toISOString().substr(0, 10), 
    favorite: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const validateFields = () => {
    let errors = {};
    if (!newItem.title) errors.title = "Title is required.";
    if (!newItem.amount || newItem.amount <= 0) errors.amount = "Amount must be a positive number.";
    if (!newItem.date) errors.date = "Date is required.";
    
    const selectedDate = new Date(newItem.date);
    const today = new Date();
    if (selectedDate > today) errors.date = "Please select a date that is not in the future.";
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateFields()) return;

    try {
      const response = await axios.post('http://localhost:8000/addCost', newItem);
      console.log("New cost item added:", response.data);

      setNewItem({
        title: "",
        description: "",
        amount: "",
        balance: "",
        date: new Date().toISOString().substr(0, 10),
        favorite: false,
      });
    } catch (error) {
      console.error("Error adding new cost item:", error);
      alert("There was an error adding the new cost item. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-cost-container">
        <div className="add-cost-paper">
          <span className="input-title-span">
            <h1 className="input-title-text">Title:</h1>
            <input
              className="input-title-field"
              name="title"
              value={newItem.title}
              onChange={handleChange}
            />
            {errors.title && <div className="error-message">{errors.title}</div>}
          </span>
          <span className="input-description-span">
            <h1 className="input-description-text">Description:</h1>
            <input
              className="input-description-field"
              name="description"
              value={newItem.description}
              onChange={handleChange}
            />
          </span>
          <span className="input-amount-span">
            <h1 className="input-amount-text">Amount:</h1>
            <input
              className="input-amount-field"
              name="amount"
              type="number"
              value={newItem.amount}
              onChange={handleChange}
            />
            {errors.amount && <div className="error-message">{errors.amount}</div>}
          </span>
          <span className="input-date-span">
            <h1 className="input-date-text">Date:</h1>
            <input
              type="date"
              className="input-date-field"
              name="date"
              value={newItem.date}
              onChange={handleChange}
            />
            {errors.date && <div className="error-message">{errors.date}</div>}
          </span>
          <span className="btn-span">
            <button
              className="btn-add-cost"
              type="submit"
              disabled={!newItem.title || !newItem.amount || !newItem.date}
            >
              SUBMIT
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default AddCost;
