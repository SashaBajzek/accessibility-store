import "./Header.css";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { shopName } from "../../constants";
import Cart from "../Cart/Cart";
import { useContext, useRef } from "react";
import CartButton from "../CartButton/CartButton";
import { CartContext } from "../../context/CartContext";
import { HideOverflowContext } from "../../context/HideOverflowContext";
import { HeartHollow } from "../../SVGs/HeartHollow";

const Header = () => {
  const { totalItemsInCart } = useContext(CartContext);
  const { setHideOverflow } = useContext(HideOverflowContext);

  useContext(CartContext);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const openCart = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      setHideOverflow(true);
    }
  };

  const location = useLocation();
  const shouldShowCart = location.pathname !== "/checkout";

  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" aria-label={`${shopName} Home`} className="brand">
            {shopName}
          </Link>
          <div className="inline-end-links">
            <Link to="/favorites" aria-label="Favorites" className="favorites">
              <HeartHollow />
            </Link>
            {shouldShowCart && (
              <CartButton cartQuantity={totalItemsInCart} openCart={openCart} />
            )}
          </div>
        </div>
      </header>
      <Cart ref={dialogRef} />
    </>
  );
};

export default Header;
