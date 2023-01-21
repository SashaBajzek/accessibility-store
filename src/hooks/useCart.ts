import { useCallback, useState } from "react";
import {
  CartItem,
  getTotalCost,
  getTotalItemsInCart,
  indexOfCartItem,
} from "../cartUtils";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const cartUpdate = (newCart: CartItem[]) => {
    setCart(newCart);
    setTotalItemsInCart(getTotalItemsInCart(newCart));
    setTotalCost(getTotalCost(newCart));
  };

  const removeItem = useCallback(
    (item: CartItem) => {
      const newCart = [...cart];
      const index = indexOfCartItem(item, cart);
      if (index < 0) return;
      newCart.splice(index, 1);
      cartUpdate(newCart);
    },
    [cart]
  );

  const firstAddOfItem = useCallback(
    (item: CartItem) => {
      const newCart = [...cart];
      newCart.push(item);
      cartUpdate(newCart);
    },
    [cart]
  );

  const updateItemQuantity = useCallback(
    (item: CartItem) => {
      const index = indexOfCartItem(item, cart);
      if (item.quantity === 0) {
        removeItem(item);
        return;
      } else if (index < 0) {
        firstAddOfItem(item);
      } else {
        const newCart = [...cart];
        newCart[index].quantity = item.quantity;
        cartUpdate(newCart);
      }
    },
    [cart, firstAddOfItem, removeItem]
  );

  const addItem = useCallback(
    (item: CartItem) => {
      const index = indexOfCartItem(item, cart);
      if (index < 0) {
        firstAddOfItem(item);
      } else {
        const currentQuantity = cart[index].quantity;
        updateItemQuantity({
          quantity: item.quantity + currentQuantity,
          item: item.item,
          size: item.size,
        });
      }
    },
    [cart, firstAddOfItem, updateItemQuantity]
  );

  return {
    addItem,
    cart,
    removeItem,
    totalCost,
    totalItemsInCart,
    updateItemQuantity,
  };
}
