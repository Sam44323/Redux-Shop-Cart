import * as actionTypes from './actionTypes';

export const addNewItem = (itemObj) => {
  return {
    type: actionTypes.ADD_ITEM,
    item: itemObj,
  };
};

export const increaseItemQuant = (itemId) => {
  return {
    type: actionTypes.INCREASE_ITEM_QUANTITY,
    itemId: itemId,
  };
};

export const decreaseItemQuant = (itemId) => {
  return {
    type: actionTypes.DECREASE_ITEM_QUANTITY,
    itemId: itemId,
  };
};

export const deleteItem = (itemId) => {
  return {
    type: actionTypes.DELETE_ITEM,
    itemId: itemId,
  };
};
