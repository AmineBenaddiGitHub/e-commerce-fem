import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

function updateCart(state, action) {
  switch (action.type) {
    case "add-product": {
      return { quantity: state.quantity + action.payload };
    }
    case "remove-product": {
      return { quantity: 0 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(updateCart, { quantity: 0 });
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
