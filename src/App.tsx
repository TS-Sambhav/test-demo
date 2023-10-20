import React from "react";

import "./App.css";
import Counter from "./components/Counter";
import SearchFilter from "./components/SearchFilter";

const App = () => {
  return (
    <div className="common">
      <Counter />
      <SearchFilter />
    </div>
  );
};

export default App;
