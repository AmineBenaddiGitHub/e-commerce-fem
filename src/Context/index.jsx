import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

function updateCart(state, action) {
  switch (action.type) {
    case "add-product": {
      return { ...state, quantity: state.quantity + action.payload };
    }
    case "remove-product": {
      return { ...state, quantity: 0 };
    }
    case "set-lightbox": {
      return { ...state, lightBox: true };
    }
    case "unset-lightbox": {
      return { ...state, lightBox: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(updateCart, {
    quantity: 0,
    lightBox: false,
  });
  const value = { state, dispatch };
  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
