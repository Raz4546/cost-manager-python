// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bar from "./components/Bar.jsx";
import CostLists from "./components/CostLists.jsx";
import AddCost from "./components/AddCost.jsx"
import Favorites from "./components/Favorites.jsx"

import "./stylesheets/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Bar />
        <Routes>
          <Route path="/" element={<CostLists />} />
          <Route path="/addCost" element={<AddCost />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
