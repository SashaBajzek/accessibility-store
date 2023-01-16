import React, { useCallback } from "react";
import Header from "./accessible/Header/Header";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./accessible/HomePage/HomePage";
import CheckoutPage from "./accessible/CheckoutPage/CheckoutPage";
import { Bracelet } from "./inventory";
import ProductDetailsPage from "./accessible/ProductDetailsPage/ProductDetailsPage";
import Footer from "./accessible/Footer/Footer";

export interface CartItem {
  item: Bracelet;
  quantity: number;
}

const calculateItemQuantity = (cart: CartItem[]): number => {
  const initialValue = 0;
  const sumWithInitial = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    initialValue
  );
  return sumWithInitial;
};

function App() {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [cartQuantity, setCartQuantity] = React.useState(0);

  const indexOfItem = useCallback(
    (cartItem: CartItem) => {
      if (cart.length === 0) return -1;
      for (let i = 0; i < cart.length; i++) {
        if (cartItem.item === cart[i].item) {
          return i;
        }
      }
      return -1;
    },
    [cart]
  );

  const addToCart = useCallback(
    (cartItem: CartItem) => {
      if (cartItem.quantity <= 0) return;
      let newCart = cart;
      const index = indexOfItem(cartItem);
      if (cart.length === 0 || index === -1) {
        newCart = [...cart, cartItem];
      } else {
        newCart[index].quantity += cartItem.quantity;
      }
      console.log("cart", cart);
      setCart(newCart);
      setCartQuantity(calculateItemQuantity(cart));
    },
    [cart, indexOfItem, setCart]
  );

  return (
    <div className="App">
      <Router>
        <Header cartQuantity={cartQuantity} />
        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage addToCart={addToCart} />}
            ></Route>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
            <Route
              path="/items/:id"
              element={<ProductDetailsPage addToCart={addToCart} />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
