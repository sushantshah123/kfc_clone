import { createContext, useContext, useReducer } from "react";

// Initial state for the shopping cart
const initialState = {
    items: [],
  };
  
  // Action types
  const ADD_TO_CART = 'ADD_TO_CART';
  const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
  const CLEAR_CART = 'CLEAR_CART';
  const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
  const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

// Reducer function
const shoppingReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
       
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
      case INCREASE_QUANTITY:
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};


  // Create context
const ShoppingContext = createContext();

// Create context provider
const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  // Action creators
  const addToCart = newItem => {
    dispatch({ type: ADD_TO_CART, payload: newItem });
  };

  const removeFromCart = itemId => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  const increaseQuantity = itemId => {
    dispatch({ type: INCREASE_QUANTITY, payload: itemId });
  };
  

  const decreaseQuantity = itemId => {
    dispatch({ type: DECREASE_QUANTITY, payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART});
  };

  return (
    <ShoppingContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

// Custom hook to access the context
const useShoppingCart = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingProvider');
  }
  return context;
};

export { ShoppingProvider, useShoppingCart };

