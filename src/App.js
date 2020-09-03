import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import { Provider } from "react-redux"; // Voy a envolver todos mis component alrededor de este Provider. 
//Con esto puedo mover todo lo que necesite alrededor de toda la aplicacion
import store from './store-redux.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
