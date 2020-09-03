import React from "react";
import kids from "../images/kids.jpeg";
import shirt from "../images/shirt.jpeg";
import sweater from "../images/sweater.jpeg";
import sweater2 from "../images/sweater2.jpeg";
import { connect } from "react-redux"; // Me permite enlazar conectar redux con este component
import { addBasket } from "../actions-redux/addAction";

const Home = (props) => {
  // React Hooks: [(Name of my state),(When I want to update the basket)]= State inicial.
  // El state empieza como { basketNumber:0 } y se incrementa state.basketNumber cuando el usuario hace click en el botón de las imagenes llamando a this.setState().
  // En este caso no lo utilizaremos, pq al estar definido dentro de Home, no podemos pasar los datos al componente Navbar. Para ello, debemos utilizar Redux

  // const [basketNumbers, setBasketNumbers]= useState(0)

  // const addToBasket= ()=>{
  //     setBasketNumbers(basketNumbers+1)
  // }

  // Debemos anadir el Onclick dentro de cada imagen
  // <a onClick={addToBasket} className="addToCart cart1" href="#">Add to Cart</a>

  return (
    <div className="container">
      <div className="image">
        <img src={shirt} alt="Tshirt" />
        <h3>Tshirt</h3>
        <h3>$30,00</h3>
        <a onClick={()=>props.addBasket(`PinkFlowersTshirt`)} className="addToCart cart1" href="#">
          Add to Cart
        </a>
      </div>
      <div className="image">
        <img src={sweater} alt="Sweater" />
        <h3>Sweaters</h3>
        <h3>$50,00</h3>
        <a onClick={()=> props.addBasket(`IceberSweater`)} className="addToCart cart2" href="#">
          Add to Cart
        </a>
      </div>
      <div className="image">
        <img src={sweater2} alt="Sweater" />
        <h3>Unisex</h3>
        <h3>$50,00</h3>
        <a onClick={()=>props.addBasket(`PinkPanterSweater`)} className="addToCart cart3" href="#">
          Add to Cart
        </a>
      </div>
      <div className="image">
        <img src={kids} alt="Kids" />
        <h3>Kids</h3>
        <h3>$20,00</h3>
        <a onClick={()=>props.addBasket(`MayanComboSweater`)} className="addToCart cart4" href="#">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addBasket })(Home);
