import React from 'react';

import './InputCartItems.css';

class InputCartItems extends React.Component {
  state = {
    image: '',
    title: '',
    price: 0,
  };

  changeInputName = (inputName, event) => {
    const stateObject = { ...this.state };
    stateObject[inputName] = event.target.value;
    this.setState(stateObject);
  };

  render() {
    return (
      <div className='inputCartDiv'>
        <div className='inputItemsDiv'>
          <h3 className='messageItemText'>Add Your Item</h3>
          <input
            type='text'
            name='imageInput'
            id='imageInput'
            autoComplete='off'
            placeholder='Image of the product'
            value={this.state.image}
            onChange={(event) => this.changeInputName('image', event)}
          />
        </div>
        <div className='inputItemsDiv'>
          <input
            type='text'
            name='title'
            id='titleInput'
            placeholder='Name of the product'
            value={this.state.title}
            onChange={(event) => this.changeInputName('title', event)}
            autoComplete='off'
          />
        </div>
        <div className='inputItemsDiv'>
          <input
            type='number'
            name='price'
            id='priceInput'
            placeholder='Price of the product'
            value={this.state.price}
            onChange={(event) => this.changeInputName('price', event)}
            autoComplete='off'
          />
        </div>
        <button
          className='addToList'
          onClick={() => {
            this.props.addNewItem({ ...this.state });
            this.setState({ image: '', title: '', price: 0 });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default InputCartItems;
