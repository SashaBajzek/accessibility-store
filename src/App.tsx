import Header from "./accessible/Header/Header";
import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./accessible/pages/HomePage/HomePage";
import CheckoutPage from "./accessible/pages/CheckoutPage/CheckoutPage";
import ProductDetailsPage from "./accessible/pages/ProductDetailsPage/ProductDetailsPage";
import Footer from "./accessible/Footer/Footer";
import { useCart } from "./hooks/useCart";
import { useState } from "react";
import { shopName } from "./constants";
import { CartContext } from "./context/CartContext";
import { HideOverflowContext } from "./context/HideOverflowContext";
import { SetTitleContext } from "./context/SetTitleContext";
import { FavoritesContext } from "./context/FavoritesContext";
import { useFavorites } from "./hooks/useFavorites";
import FavoritesPage from "./accessible/pages/FavoritesPage/FavoritesPage";
import ConfirmationPage from "./accessible/pages/ConfirmationPage/ConfirmationPage";
import { AriaLiveAnnouncerProvider } from "./hooks/AriaLiveAnnouncer";

// const ButtonTester = () => {
//   const announcer = useAriaLiveAnnouncer();
//   const handleAriaTest = () => {
//     announcer.addMessage("Sasha2");
//   };
//   return <button onClick={handleAriaTest}>here</button>;
// };

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
        <AriaLiveAnnouncerProvider>
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

                    <Route
                      path="/confirmation"
                      element={<ConfirmationPage />}
                    />
                    <Route
                      path="/accessibility-store/confirmation"
                      element={<ConfirmationPage />}
                    />

                    <Route path="/:id" element={<ProductDetailsPage />} />
                    <Route
                      path="/accessibility-store/:id"
                      element={<ProductDetailsPage />}
                    />
                    <Route
                      path="/favorites/:id"
                      element={<ProductDetailsPage />}
                    />
                  </Routes>
                  <Footer />
                </SetTitleContext.Provider>
              </HideOverflowContext.Provider>
            </FavoritesContext.Provider>
          </CartContext.Provider>
        </AriaLiveAnnouncerProvider>
      </Router>
    </div>
  );
}

export default App;
