import "./Header.css";

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

  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" aria-label={`${shopName} Home`} className="brand">
            {shopName}
          </Link>
          <button
            aria-label="Cart"
            aria-haspopup="dialog"
            className="cart-button"
            onClick={openCart}
          >
            <ShoppingBag />
            {cartQuantity > 0 && cartQuantity}
          </button>
        </div>
      </header>
      <Cart ref={dialogRef} />
    </>
  );
};

export default Header;
