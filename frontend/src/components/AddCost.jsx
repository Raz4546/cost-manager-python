import React, { useState } from "react";
import axios from "axios";
import "../stylesheets/AddCost.css";

const expenseCategories = [
  "Housing",
  "Transportation",
  "Food",
  "Entertainment",
  "Other",
];

const AddCost = () => {
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    amount: "",
    balance: "",
    date: new Date().toISOString().substr(0, 10), // Format date as YYYY-MM-DD
    favorite: false,
    category: "", // Initialize category as an empty string
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!newItem.title || !newItem.amount || !newItem.category || !newItem.date) {
      alert("Please fill out all required fields.");
      return;
    }

    // Validate date: Convert to Date object and compare with today's date
    const selectedDate = new Date(newItem.date);
    const today = new Date();
    if (selectedDate > today) {
      alert("Please select a date that is not in the future.");
      return;
    }

    try {
      const response = await axios.post('/addCost', newItem);
      console.log("New cost item added:", response.data);

      // Reset form fields
      setNewItem({
        title: "",
        description: "",
        amount: "",
        balance: "",
        date: new Date().toISOString().substr(0, 10),
        favorite: false,
        category: "",
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
          </span>
          <span className="input-category-span">
            <h1 className="input-category-text">Category:</h1>
            <select
              className="input-category-field"
              name="category"
              value={newItem.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              {expenseCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
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
          </span>
          <span className="btn-span">
            <button className="btn-add-cost" type="submit">
              SUBMIT
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default AddCost;
