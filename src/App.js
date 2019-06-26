import React from "react";
import "./App.css";

import Board from "./components/Board";
import SectionForm from "./components/SectionForm";

function App() {
  return (
    <div className="App">
      <SectionForm />
      <Board />
    </div>
  );
}

export default App;
