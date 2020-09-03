import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions-redux/types";

//Initial state for the basket.
const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    PinkFlowersTshirt: {
      name: `Pink Flowers Tshirt`,
      price: 30.0,
      number: 0,
      inCart: false,
    },
    IceberSweater: {
      name: `Iceber Sweater`,
      price: 50.0,
      number: 0,
      inCart: false,
    },
    PinkPanterSweater: {
      name: `Pink Panter Sweater`,
      price: 50.0,
      number: 0,
      inCart: false,
    },
    MayanComboSweater: {
      name: `Mayan Combo Sweater`,
      price: 20.0,
      number: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      
    let addQuantity = { ...state.products[action.payload] }; //Igua a un object donde copio todo el state/product
      //y entonces paso indicando el action.payload. Es decir, click addBasket y veo productName,estoy dispatch la action payload con productName,
      //entonces me voy al object busco por ese productName y me devuelve toda la info al respecto. 
      //Esta addQuantity es como una copia del state, los ...(spread operator) significa copiando y storing la info en un nueva vble addQuantity
      addQuantity.number += 1;
      addQuantity.inCart = true;
      console.log(addQuantity);
      
      return {
          ...state, // Quiero copiar todo my state de nuevo
        basketNumbers: state.basketNumbers + 1, // se actualiza el numero de items en el carrito
        cartCost: state.cartCost + state.products[action.payload].price, //Quiero actualizar el cartCost, decimos que al valor que este en el carrito le sumamos el precio del producto que indicamos
        products:{
            // Actualizamos el producto indicando toda la info que esta en state
            ...state.products,
            //y overwrite la cantidad de este producto indicado en [action.payload]
            [action.payload]: addQuantity

        }
    };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
