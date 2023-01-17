import React, { createContext } from "react";
import Header from "./accessible/Header/Header";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./accessible/HomePage/HomePage";
import CheckoutPage from "./accessible/CheckoutPage/CheckoutPage";
import ProductDetailsPage from "./accessible/ProductDetailsPage/ProductDetailsPage";
import Footer from "./accessible/Footer/Footer";
import { CartItem } from "./cartUtils";
import { useCart } from "./useCart";
import { useState } from "react";

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

interface HideOverflowContextProps {
  setHideOverflow: (hideOverflow: boolean) => void;
}

export const HideOverflowContext = createContext<HideOverflowContextProps>({
  setHideOverflow: () => {},
});

function App() {
  const {
    addItem,
    cart,
    removeItem,
    totalCost,
    totalItemsInCart,
    updateItemQuantity,
  } = useCart();

  const [hideOverflow, setHideOverflow] = useState(false);

  return (
    <div className={`App ${hideOverflow ? "overflow-hidden" : ""}`}>
      <Router>
        <CartContext.Provider
          value={{
            addItem,
            cart,
            removeItem,
            totalCost,
            totalItemsInCart,
            updateItemQuantity,
          }}
        >
          <HideOverflowContext.Provider value={{ setHideOverflow }}>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route
                  path="/accessibility-store/"
                  element={<HomePage />}
                ></Route>

                <Route path="/checkout" element={<CheckoutPage />}></Route>
                <Route
                  path="/accessibility-store/checkout"
                  element={<CheckoutPage />}
                ></Route>
                <Route path="/items/:id" element={<ProductDetailsPage />} />
                <Route
                  path="/accessibility-store/items/:id"
                  element={<ProductDetailsPage />}
                />
              </Routes>
            </main>
            <Footer />
          </HideOverflowContext.Provider>
        </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
