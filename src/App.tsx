import React from "react";
import Header from "./accessible/Header/Header";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./accessible/HomePage/HomePage";
import CheckoutPage from "./accessible/CheckoutPage/CheckoutPage";
import { Bracelet } from "./sampleProducts";

export interface CartItem {
  product: Bracelet;
  quantity: number;
}

const calculateQuantity = (cart: CartItem[]): number => {
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

  React.useEffect(() => {
    setCartQuantity(calculateQuantity(cart));
  }, [cart, setCartQuantity]);

  const addToCart = (cartItem: CartItem) => {
    const newCart = [...cart, cartItem];
    setCart(newCart);
  };

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
          </Routes>
        </main>
        <footer>Sasha</footer>
      </Router>
    </div>
  );
}

export default App;
