import React, { createContext, useCallback } from "react";
import Header from "./accessible/Header/Header";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./accessible/HomePage/HomePage";
import CheckoutPage from "./accessible/CheckoutPage/CheckoutPage";
import ProductDetailsPage from "./accessible/ProductDetailsPage/ProductDetailsPage";
import Footer from "./accessible/Footer/Footer";
import { calculateItemQuantity, CartItem, indexOfCartItem } from "./cartUtils";

interface CartContextProps {
  cart: CartItem[];
}

export const CartContext = createContext<CartContextProps>({ cart: [] });

function App() {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [cartQuantity, setCartQuantity] = React.useState(0);

  const addToCart = useCallback(
    (cartItem: CartItem) => {
      if (cartItem.quantity <= 0) return;
      let newCart = cart;
      const index = indexOfCartItem(cartItem, cart);
      if (cart.length === 0 || index === -1) {
        newCart = [...cart, cartItem];
      } else {
        newCart[index].quantity += cartItem.quantity;
      }
      setCart(newCart);
      setCartQuantity(calculateItemQuantity(newCart));
    },
    [cart, setCart]
  );

  return (
    <div className="App">
      <Router>
        <CartContext.Provider value={{ cart }}>
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
        </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
