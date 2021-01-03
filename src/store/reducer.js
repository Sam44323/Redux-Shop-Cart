import * as actionTypes from './actions/actionTypes';

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0.0,
  idCount: 1,
};

const reducer = (state = initialState, actions) => {
  let cartItems;
  switch (actions.type) {
    case actionTypes.ADD_ITEM:
      const newObject = {
        ...actions.item,
        id: state.idCount,
        quantity: 1,
        price: parseFloat(actions.item.price),
      };

      const Price = state.totalPrice + newObject.price;

      return {
        ...state,
        cartItems: state.cartItems.concat(newObject),
        totalItems: state.totalItems + 1,
        totalPrice: Price,
        idCount: state.idCount + 1,
      };

    case actionTypes.INCREASE_ITEM_QUANTITY:
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === actions.itemId
      );
      cartItems = [...state.cartItems];
      cartItems[itemIndex].quantity = cartItems[itemIndex].quantity + 1;
      const totalPrice = (
        state.totalPrice + cartItems[itemIndex].price
      ).toFixed(2);

      return {
        ...state,
        cartItems: [...cartItems],
        totalPrice: +totalPrice,
        totalItems: state.totalItems + 1,
      };

    case actionTypes.DECREASE_ITEM_QUANTITY:
      cartItems = [...state.cartItems];
      const index = state.cartItems.findIndex(
        (item) => item.id === actions.itemId
      );
      let price = cartItems[index].price;
      const totPrice = (state.totalPrice - price).toFixed(2);

      if (cartItems[index].quantity - 1 === 0) {
        cartItems = cartItems.filter((item) => item.id !== actions.itemId);
      } else {
        cartItems[index].quantity = cartItems[index].quantity - 1;
      }
      return {
        ...state,
        cartItems: [...cartItems],
        totalPrice: +totPrice,
        totalItems: state.totalItems - 1,
      };

    case actionTypes.DELETE_ITEM:
      let cart = [...state.cartItems];
      const itemIdx = cart.findIndex((item) => item.id === actions.itemId);
      const qty = cart[itemIdx].quantity;
      const priceValue = cart[itemIdx].quantity * cart[itemIdx].price;
      cart = cart.filter((item) => item.id !== actions.itemId);
      const netPrice = (state.totalPrice - priceValue).toFixed(2);
      return {
        ...state,
        cartItems: cart,
        totalPrice: +netPrice,
        totalItems: state.totalItems - qty,
      };

    default:
      return state;
  }
};

export default reducer;
