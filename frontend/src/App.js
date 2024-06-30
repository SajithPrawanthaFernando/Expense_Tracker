import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Navigation from "./components/Navigation";
import "./index.css";
import Dashboard from "./components/Dashboard";
import Incomes from "./components/Incomes";
import Expenses from "./components/Expenses";

function App() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Incomes />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex flex-row h-screen">
        <div className="w-1/5 bg-gray-800 p-6 m-2 shadow-md rounded-xl">
          <Navigation active={active} setActive={setActive} />
        </div>

        <div className="w-4/5 bg-gray-800 p-6 m-2 shadow-md rounded-xl">
          <h2 className="text-xl font-bold mb-4"></h2>
          <p></p>
          {displayData()}
        </div>
      </div>
    </div>
  );
}

export default App;
