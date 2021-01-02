import React from 'react';

import './Cart.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = props.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        itemId={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        quantity={item.quantity}
        increaseQty={() => props.incQty(item.id)}
        decreaseQty={() => props.decQty(item.id)}
      />
    );
  });

  return (
    <React.Fragment>
      <div className='cartItemDisplay'>{cartItems}</div>
    </React.Fragment>
  );
};

export default Cart;
