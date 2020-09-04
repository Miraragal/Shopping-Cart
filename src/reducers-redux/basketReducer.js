import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions-redux/types";

//Initial state for the basket.
const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    pinkFlowersTshirt: {
      name: 'Pink Flowers Tshirt',
      tagName: 'pinkFlowersTshirt',
      price: 30.0,
      number: 0,
      inCart: false,
    },
    iceberSweater: {
      name: `Iceber Sweater`,
      tagName: 'iceberSweater',
      price: 50.0,
      number: 0,
      inCart: false,
    },
    pinkPanterSweater: {
      name: `Pink Panter Sweater`,
      tagName: 'pinkPanterSweater',
      price: 50.0,
      number: 0,
      inCart: false,
    },
    mayanComboSweater: {
      name: `Mayan Combo Sweater`,
      tagName: 'mayanComboSweater',
      price: 20.0,
      number: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] }; //Igua a un object donde copio todo el state/product
      //y entonces paso indicando el action.payload. Es decir, click addBasket y veo productName,estoy dispatch la action payload con productName,
      //entonces me voy al object busco por ese productName y me devuelve toda la info al respecto.
      //Esta addQuantity es como una copia del state, los ...(spread operator) significa copiando y storing la info en un nueva vble addQuantity
      productSelected.number += 1;
      productSelected.inCart = true;
      console.log(productSelected);

      return {
        ...state, // Quiero copiar todo my state de nuevo
        basketNumbers: state.basketNumbers + 1, // se actualiza el numero de items en el carrito
        cartCost: state.cartCost + state.products[action.payload].price, //Quiero actualizar el cartCost, decimos que al valor que este en el carrito le sumamos el precio del producto que indicamos
        products: {
          // Actualizamos el producto indicando toda la info que esta en state
          ...state.products,
          //y overwrite la cantidad de este producto indicado en [action.payload]
          [action.payload]: productSelected,
        }
      }
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      }

    case INCREASE_QUANTITY:
      // seria lo mismo que si hacemos state.products['PinkFlowersTshirt']
      productSelected = { ...state.products[action.payload] };
      productSelected.number += 1;

      return {
        ...state,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          //lo mismo que llamar PinkFlowersTshirt: productSelected
          [action.payload]: productSelected,
        }
      }

    case DECREASE_QUANTITY:
      // seria lo mismo que si hacemos state.products['PinkFlowersTshirt']
      productSelected = { ...state.products[action.payload] };
      let newCartCost=0


      if (productSelected.number === 0) {
        productSelected.number = 0;
        newCartCost= state.cartCost

      } else {
        productSelected.number -= 1;
        newCartCost= state.cartCost - state.products[action.payload].price
      }

      return {
        ...state,
        cartCost: newCartCost,
        products: {
          ...state.products,
          //lo mismo que llamar PinkFlowersTshirt: productSelected
          [action.payload]: productSelected,
        }
      }

    default:
      return state;
  }
};
