import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import NavBar from './component/NavBar/NavBar.js';
import Cart from './component/Cart/Cart';
import InputCartItems from './component/InputCartItems/InputCartItems';
import * as actionCreators from './store/actions/actionCreators';

class App extends React.Component {
  // state = {
  //   cartItems: [],
  //   totalItems: 0,
  //   totalPrice: 0,
  //   idCount: 1,
  // };

  // increaseItemQuant = (itemId) => {
  //   let cartItem = [...this.state.cartItems];
  //   const itemIndex = cartItem.findIndex((item) => item.id === itemId);
  //   cartItem[itemIndex].quantity = cartItem[itemIndex].quantity + 1;
  //   const totalItems = this.state.totalItems + 1;
  //   const totalPrice =
  //     this.state.totalPrice + parseFloat(cartItem[itemIndex].price);
  //   console.log(typeof totalPrice);
  //   this.setState({
  //     cartItems: cartItem,
  //     totalItems: totalItems,
  //     totalPrice: Math.round(totalPrice),
  //   });
  // };

  // decreaseItemQuant = (itemId) => {
  //   let cartItem = [...this.state.cartItems];
  //   const itemIndex = cartItem.findIndex((item) => item.id === itemId);
  //   const totalItems = this.state.totalItems - 1;
  //   const totalPrice = this.state.totalPrice - cartItem[itemIndex].price;
  //   if (cartItem[itemIndex].quantity - 1 === 0) {
  //     cartItem = cartItem.filter((item) => item.id !== itemId);
  //   } else {
  //     cartItem[itemIndex].quantity = cartItem[itemIndex].quantity - 1;
  //   }
  //   this.setState({
  //     cartItems: cartItem,
  //     totalItems: totalItems,
  //     totalPrice: Math.round(totalPrice),
  //   });
  // };

  // addNewCartItem = (newItem) => {
  //   const cartItem = [...this.state.cartItems];
  //   const newItemObject = { ...newItem };
  //   newItemObject.quantity = 1;
  //   newItemObject.id = this.state.idCount + 1;
  //   cartItem.push(newItemObject);
  //   const totalPrice = this.state.totalPrice + parseFloat(newItem.price);
  //   const totalItems = this.state.totalItems + 1;
  //   this.setState({
  //     cartItems: cartItem,
  //     idCount: this.state.idCount + 1,
  //     totalItems: totalItems,
  //     totalPrice: Math.round(totalPrice),
  //   });
  // };

  render() {
    const noItems = (
      <div className='noItemsDiv'>
        <h1>Hey, lets shop together!</h1>
      </div>
    );
    return (
      <React.Fragment>
        <NavBar
          cartTotal={this.props.totalItems}
          price={this.props.totalPrice}
        />
        {this.props.cartItems.length > 0 ? (
          <Cart
            items={this.props.cartItems}
            incQty={this.props.increaseItemQty}
            decQty={this.props.decreaseItemQty}
            deleteItem={this.props.deleteOneItem}
          />
        ) : (
          noItems
        )}
        <InputCartItems addNewItem={this.props.onAddNewItem} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    totalPrice: state.totalPrice,
    totalItems: state.totalItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNewItem: (newItem) => dispatch(actionCreators.addNewItem(newItem)),
    increaseItemQty: (itemId) =>
      dispatch(actionCreators.increaseItemQuant(itemId)),
    decreaseItemQty: (itemId) =>
      dispatch(actionCreators.decreaseItemQuant(itemId)),

    deleteOneItem: (itemId) => dispatch(actionCreators.deleteItem(itemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
