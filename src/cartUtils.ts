import { Bracelet, Size } from "./inventory";

export interface CartItem {
  item: Bracelet;
  quantity: number;
  size: Size;
}

export const getTotalItemsInCart = (cart: CartItem[]): number => {
  const initialValue = 0;
  const sumWithInitial = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    initialValue
  );
  return sumWithInitial;
};

export const indexOfCartItem = (cartItem: CartItem, cart: CartItem[]) => {
  if (cart.length === 0) return -1;
  for (let i = 0; i < cart.length; i++) {
    if (cartItem.item === cart[i].item && cartItem.size === cart[i].size) {
      return i;
    }
  }
  return -1;
};

export const getTotalCost = (cart: CartItem[]): number => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].item.price * cart[i].quantity;
  }
  return total;
};
