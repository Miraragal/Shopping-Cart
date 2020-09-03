import React, { Fragment } from "react";
import { connect } from "react-redux"; // Me permite enlazar conectar redux con este component
import kids from "../images/kids.jpeg";
import shirt from "../images/shirt.jpeg";
import sweater from "../images/sweater.jpeg";
import sweater2 from "../images/sweater2.jpeg";

function Cart({ basketProps }) {
  //Seria lo mismo que si pongo props.basketProps

  console.log(basketProps);

  let productstInCart = [];
  Object.keys(basketProps.products).forEach(function (item) {
    console.log(item); // imprimimos las key/name del objeto, ed, el nombre de cada elemento
    console.log(basketProps.products[item].inCart); // con este vemos para cada elemento del objeto si esta o no dentro del carrito

    if (basketProps.products[item].inCart) {
      //si mi producto es en el carrito
      productstInCart.push(basketProps.products[item]); // anado a mi array vacio productsInCart este nuevo item
    }

    console.log(productstInCart);
  });

  const productImages = [shirt, sweater, sweater2, kids];

  productstInCart = productstInCart.map((product, index) => {
    console.log(`My product is`);
    console.log(product);

    return (
      <Fragment>
        <div className="product">
          <ion-icon name="close-circle-outline"></ion-icon>
          <img src={productImages[index]} />
          <span className="sm-hide">{product.name}</span>
        </div>

        <div className="price sm-hide">${product.price},00</div>

        <div className="quantity">
        <ion-icon name="arrow-down-circle-outline"></ion-icon>
          <span>{product.number}</span>
          <ion-icon name="arrow-up-circle-outline"></ion-icon>
        </div>

        <div className="total">${product.number * product.price},00</div>
      </Fragment>
    );
  });

  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{productstInCart}</div>

      <div className="basketTotalContainer">
        <h4 className="basketTotalTittle">Basket Total</h4>
        <h4 className="basketTotal">${basketProps.cartCost},00</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps)(Cart);
