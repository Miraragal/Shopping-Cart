import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import { Provider } from "react-redux"; // Voy a envolver todos mis component alrededor de este Provider. 
//Con esto puedo mover todo lo que necesite alrededor de toda la aplicacion
import store from './store-redux.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cart from "./components/Cart.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* cuando vayas a "/" renderiza el componente Home. En este caso como duplicamos "/" 
          añadimos exact, sino en cart se renderizaria Home tb  */}
          <Route path="/cart" component={Cart} />
        </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
