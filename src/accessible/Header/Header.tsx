import "./Header.css";

import { Link } from "react-router-dom";
import { shopName } from "../../constants";
import Cart from "../Cart/Cart";
import { MouseEvent, useRef } from "react";

function ShoppingBag() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"
      ></path>
    </svg>
  );
}

interface HeaderProps {
  cartQuantity: number;
}

const Header = ({ cartQuantity }: HeaderProps) => {
  const cartRef = useRef(null);
  const openCart = () => {
    if (cartRef.current === null) return;
    (cartRef.current as any).showModal();
  };
  const closeCart = () => {
    if (cartRef.current === null) return;
    (cartRef.current as any).close();
  };
  const onClick = (event: MouseEvent) => {
    if (event.target === cartRef.current) {
      (cartRef.current as any).close();
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
      <dialog className="Cart" onClick={onClick} ref={cartRef}>
        <div className="no-dismiss">
          <h2>Your cart</h2>
          <button onClick={closeCart}>Close</button>
          <form>
            <button>Check out</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Header;
