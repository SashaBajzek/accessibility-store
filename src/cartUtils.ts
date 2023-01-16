import { Bracelet } from "./inventory";

export interface CartItem {
  item: Bracelet;
  quantity: number;
}

export const calculateItemQuantity = (cart: CartItem[]): number => {
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
    if (cartItem.item === cart[i].item) {
      return i;
    }
  }
  return -1;
};

export const getTotal = (cart: CartItem[]): number => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].item.price * cart[i].quantity;
  }
  return total;
};
