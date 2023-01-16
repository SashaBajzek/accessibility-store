import "./Header.css";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { shopName } from "../../constants";
import Cart from "../Cart/Cart";
import { useRef } from "react";
import { ShoppingBag } from "../../SVGs/ShoppingBag";

interface HeaderProps {
  cartQuantity: number;
}

const Header = ({ cartQuantity }: HeaderProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openCart = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
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
          {shouldShowCart && (
            <button
              aria-label="Cart"
              aria-haspopup="dialog"
              className="cart-button"
              onClick={openCart}
            >
              <ShoppingBag />
              {cartQuantity > 0 && cartQuantity}
            </button>
          )}
        </div>
      </header>
      <Cart ref={dialogRef} />
    </>
  );
};

export default Header;
