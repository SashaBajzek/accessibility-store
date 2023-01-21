import { createContext } from "react";
import { CartItem } from "../cartUtils";

interface CartContextProps {
  addItem: (item: CartItem) => void;
  cart: CartItem[];
  totalItemsInCart: number;
  removeItem: (item: CartItem) => void;
  totalCost: number;
  updateItemQuantity: (item: CartItem) => void;
}

export const CartContext = createContext<CartContextProps>({
  addItem: () => {},
  cart: [],
  totalItemsInCart: 0,
  removeItem: () => {},
  totalCost: 0,
  updateItemQuantity: () => {},
});
