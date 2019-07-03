import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Board from "./components/Board";
import SectionForm from "./components/SectionForm";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SectionForm />
        <Board />
      </div>
    </Provider>
  );
}

export default App;
