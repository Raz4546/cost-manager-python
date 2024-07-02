import React from "react";
import CostCard from "./CostCard";
import costItems from "../storage";
import "../stylesheets/Favorites.css";

const Favorites = () => {
  const favoritesList = costItems.filter((item) => item.favorite);
  return (
    <div>
      {favoritesList.length > 0 ? (
        favoritesList.map((favCost) => (
          <CostCard
            key={favCost.id}
            title={favCost.title}
            description={favCost.description}
            amount={favCost.amount}
            balance={favCost.balance}
          />
        ))
      ) : (
        <p>No Favorite :'(</p>
      )}
      
    </div>
  );
};

export default Favorites;
