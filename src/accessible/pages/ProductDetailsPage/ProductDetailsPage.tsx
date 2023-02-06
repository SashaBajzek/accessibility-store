import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById, Size } from "../../../inventory";
import QuantityPicker from "../../QuantityPicker/QuantityPicker";
import { SizeSelector } from "../../SizeSelector/SizeSelector";
import SubmitButton, { ButtonVariant } from "../../SubmitButton/SubmitButton";
import "./ProductDetailsPage.css";
import {
  getAvailableQuantity,
  getQuantityOfItemInCart,
} from "../../../cartUtils";
import { CartContext } from "../../../context/CartContext";
import ImageGallery from "../../ImageGallery/ImageGallery";
import { useAriaLiveAnnouncer } from "../../../hooks/AriaLiveAnnouncer";
import Page from "../Page/Page";
import FavoriteButton from "../../FavoriteButton/FavoriteButton";

const ProductDetailsPage = () => {
  const announcer = useAriaLiveAnnouncer();

  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [size, setSize] = useState(Size.Medium);
  const { addItem, cart } = useContext(CartContext);

  const params = useParams();
  const item = params.id && getItemById(params.id);

  if (item === undefined || item === "") return null;

  const { description, images, name, price, stock } = item;

  const getErrorMessage = (
    quantity: number,
    quantityOfItemInCart: number,
    availableQuantity: number
  ): string => {
    if (quantity <= availableQuantity) {
      return "";
    } else if (quantityOfItemInCart > 0) {
      const numAvailable = item.stock - quantityOfItemInCart;
      return numAvailable > 0
        ? `Invalid quantity.  You've already added ${quantityOfItemInCart} items to your cart and there are only ${numAvailable} more available.`
        : "All available stock has already been added to the cart";
    } else {
      return `Invalid quantity.  There are only ${item.stock} available`;
    }
  };

  const onSubmit = () => {
    const cartItem = { item, quantity, size };
    const quantityOfItemInCart = getQuantityOfItemInCart(cartItem, cart);
    const availableQuantity = getAvailableQuantity(cartItem, cart);

    if (quantity === availableQuantity && quantity > 0) {
      addItem(cartItem);
      announcer.addMessage(`${quantity} of ${name} added to cart`);
      setSuccessMessage(`Success ${quantity} added to cart`);
      setQuantity(0);
      setError("");
    } else if (quantity <= availableQuantity && quantity > 0) {
      addItem(cartItem);
      announcer.addMessage(`${quantity} of ${name} added to cart`);
      setSuccessMessage(`Success ${quantity} added to cart`);
      setQuantity(1);
      setError("");
    } else {
      setError(
        getErrorMessage(quantity, quantityOfItemInCart, availableQuantity)
      );
      setSuccessMessage("");
    }
  };

  const errorCheck = () => {
    const cartItem = { item, quantity, size };
    const quantityOfItemInCart = getQuantityOfItemInCart(cartItem, cart);
    const availableQuantity = getAvailableQuantity(cartItem, cart);

    setError(
      getErrorMessage(quantity, quantityOfItemInCart, availableQuantity)
    );
  };

  return (
    <Page heading={name} title={item ? item.name : "Shop"}>
      <div className="productDetailsPage">
        <ImageGallery images={images} />
        <div className="info">
          <p className="description">{description}</p>
          <FavoriteButton product={item} />
          <div className="price">${price}</div>
          <SizeSelector size={size} onChange={setSize}></SizeSelector>
          <QuantityPicker
            error={error}
            errorCheck={errorCheck}
            itemName={name}
            maxQuantity={stock}
            minQuantity={0}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <SubmitButton
            onSubmit={onSubmit}
            text="Add to cart"
            variant={ButtonVariant.Primary}
          />
          <div className="success">{successMessage}</div>
        </div>
      </div>
    </Page>
  );
};

export default ProductDetailsPage;
