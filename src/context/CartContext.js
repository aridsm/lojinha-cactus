import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  items: [],
  total: 0,
};

const reducerCart = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const indexInCart = state.items.findIndex(
      (item) => item.name === action.item.name
    );
    const itemAlreadyInCart = state.items[indexInCart];
    let newListItems;
    if (itemAlreadyInCart) {
      const itemUpdated = {
        ...itemAlreadyInCart,
        amount: itemAlreadyInCart.amount + action.item.amount,
      };
      newListItems = [...state.items];
      newListItems[indexInCart] = itemUpdated;
    } else {
      newListItems = [...state.items, action.item];
    }
    const totalUpdated = state.total + action.item.price * action.item.amount;
    return { items: newListItems, total: totalUpdated };
  }
  if (action.type === "UPDATE_ITEM") {
    const indexItem = state.items.findIndex(
      (item) => item.name === action.itemName
    );
    const oldItem = state.items[indexItem];

    const totalUpdated =
      state.total -
      oldItem.amount * oldItem.price +
      action.amount * state.items[indexItem].price;

    const itemUpdated = { ...oldItem, amount: action.amount };
    let newListItems = [...state.items];
    newListItems[indexItem] = itemUpdated;

    return { items: newListItems, total: totalUpdated };
  }
  if (action.type === "REMOVE_ITEM") {
    const newList = state.items.filter((item) => item.name !== action.name);

    const indexItem = state.items.findIndex(
      (item) => item.name === action.name
    );
    const item = state.items[indexItem];
    const newAmount = state.total - item.price * item.amount;

    return { items: newList, total: newAmount };
  }
  if (action.type === "REMOVE_ALL") {
    return initialState;
  }
};

const CartContextProvider = ({ children }) => {
  const [itemsCart, dispatchItemsCart] = useReducer(reducerCart, initialState);

  const addItemToCart = (item) => {
    dispatchItemsCart({ type: "ADD_ITEM", item });
  };
  const updateCartItem = (itemName, amount) => {
    dispatchItemsCart({ type: "UPDATE_ITEM", itemName, amount });
  };
  const removeCartItem = (name) => {
    dispatchItemsCart({ type: "REMOVE_ITEM", name });
  };
  const removeAllFromCart = () => {
    dispatchItemsCart({ type: "REMOVE_ALL" });
  };
  return (
    <CartContext.Provider
      value={{
        itemsCart,
        addItem: addItemToCart,
        updateAmount: updateCartItem,
        removeItem: removeCartItem,
        removeAll: removeAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
