import React, { useState, useEffect } from "react";
import axios from "axios";
import CostCard from "./CostCard";
import CostPopUp from "./CostPopUp";
import { Pagination } from "@mui/material";
import "../stylesheets/CostList.css";

const ITEMS_PER_PAGE = 6;

const CostLists = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedCost, setSelectedCost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [costItems, setCostItems] = useState([]);

  useEffect(() => {
    const fetchCostItems = async () => {
      try {
        const response = await axios.get("http://localhost:8000/costs");
        setCostItems(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching cost items:", error);
      }
    };

    fetchCostItems();
  }, []);

  const handleCardClick = (item) => {
    setSelectedCost(item);
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
    setSelectedCost(null);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("overlay")) {
      handleClosePopUp();
    }
  };

  const totalPages = Math.ceil(costItems.length / ITEMS_PER_PAGE);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleFav = (id) => {
    const newItems = costItems.map((item) =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );
    setCostItems(newItems);

    if (selectedCost && selectedCost.id === id) {
      setSelectedCost({ ...selectedCost, favorite: !selectedCost.favorite });
    }
  };

  const handleDeletingClick = (id) => {
    const newItems = costItems.filter((item) => item.id !== id);
    setCostItems(newItems);

    const newTotalPages = Math.ceil(newItems.length / ITEMS_PER_PAGE);
    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages);
    }

    handleClosePopUp();
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleItems = costItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="cost-lists-container">
      <div className="costs-container">
        {Array.isArray(visibleItems) && visibleItems.map((item) => (
          <CostCard
            key={item.id}
            title={item.title}
            description={item.description}
            amount={item.amount}
            balance={item.balance}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>
      {showPopUp && selectedCost && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="popup">
            <CostPopUp
              title={selectedCost.title}
              description={selectedCost.description}
              amount={selectedCost.amount}
              balance={selectedCost.balance}
              date={selectedCost.date}
              favorite={selectedCost.favorite}
              handleFav={() => handleFav(selectedCost.id)}
              handleDeletingClick={() => handleDeletingClick(selectedCost.id)}
              onClose={handleClosePopUp}
            />
          </div>
        </div>
      )}
      <Pagination
        className="pagination"
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default CostLists;
