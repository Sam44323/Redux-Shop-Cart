import './CartItem.css';

const CartItem = (props) => {
  return (
    <div className='cartItemComponent'>
      <div className='itemImageDiv'>
        <img src={props.image} alt={props.name} className='itemImage' />
      </div>
      <div className='itemMain'>
        <div className='itemTitleDiv'>
          <h3 className='itemTitle'>Product Name: {props.name}</h3>
          <div className='horLine' />
        </div>
        <div className='itemPriceDiv'>
          <h3 className='itemPrice'>Price: ${props.price}</h3>
          <h3 className='itemQuant'>Qty: {props.quantity}</h3>
        </div>
        <div className='actionButtonsDiv'>
          <button
            className='actionBtn addMoreButton'
            onClick={props.increaseQty}
          >
            +
          </button>
          <button
            className='actionBtn addLessButton'
            onClick={props.decreaseQty}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
