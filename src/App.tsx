import Header from "./accessible/Header/Header";
import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./accessible/HomePage/HomePage";
import CheckoutPage from "./accessible/CheckoutPage/CheckoutPage";
import ProductDetailsPage from "./accessible/ProductDetailsPage/ProductDetailsPage";
import Footer from "./accessible/Footer/Footer";
import { useCart } from "./hooks/useCart";
import { useState } from "react";
import { shopName } from "./constants";
import { CartContext } from "./context/CartContext";
import { HideOverflowContext } from "./context/HideOverflowContext";
import { SetTitleContext } from "./context/SetTitleContext";
import { FavoritesContext } from "./context/FavoritesContext";
import { useFavorites } from "./hooks/useFavorites";
import FavoritesPage from "./accessible/FavoritesPage/FavoritesPage";

function App() {
  const {
    addItem,
    cart,
    removeItem,
    totalCost,
    totalItemsInCart,
    updateItemQuantity,
  } = useCart();

  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const [hideOverflow, setHideOverflow] = useState(false);

  const setTitle = (title: string) =>
    (document.title = `${title} - ${shopName}`);

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
          <FavoritesContext.Provider
            value={{ favorites, isFavorite, toggleFavorite }}
          >
            <HideOverflowContext.Provider value={{ setHideOverflow }}>
              <SetTitleContext.Provider value={{ setTitle }}>
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                      path="/accessibility-store/"
                      element={<HomePage />}
                    />

                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route
                      path="/accessibility-store/favorites"
                      element={<FavoritesPage />}
                    />

                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route
                      path="/accessibility-store/checkout"
                      element={<CheckoutPage />}
                    />

                    <Route path="/items/:id" element={<ProductDetailsPage />} />
                    <Route
                      path="/accessibility-store/items/:id"
                      element={<ProductDetailsPage />}
                    />
                  </Routes>
                </main>
                <Footer />
              </SetTitleContext.Provider>
            </HideOverflowContext.Provider>{" "}
          </FavoritesContext.Provider>
        </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
