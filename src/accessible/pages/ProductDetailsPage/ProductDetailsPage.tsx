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

const ProductDetailsPage = () => {
  const announcer = useAriaLiveAnnouncer();

  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [size, setSize] = useState(Size.Medium);
  const { addItem, cart } = useContext(CartContext);

  const params = useParams();
  const item = params.id && getItemById(params.id);

  if (item === undefined || item === "") return null;

  const { description, images, name, price, stock } = item;

  const onSubmit = () => {
    const cartItem = { item, quantity, size };
    const quantityOfItemInCart = getQuantityOfItemInCart(cartItem, cart);
    const availableQuantity = getAvailableQuantity(cartItem, cart);

    if (quantity <= availableQuantity) {
      setError("");
      addItem(cartItem);
      announcer.addMessage(`${quantity} of ${name} added to cart`);
    } else if (quantityOfItemInCart > 0) {
      setError(
        `Invalid quantity.  There are only ${item.stock} available and there are ${quantityOfItemInCart} already in cart`
      );
    } else {
      setError(`Invalid quantity.  There are only ${item.stock} available`);
    }
  };

  return (
    <Page heading={name} title={item ? item.name : "Shop"}>
      <div className="productDetailsPage">
        <ImageGallery images={images} />
        <div className="info">
          <p className="description">{description}</p>
          <div className="price">${price}</div>
          <SizeSelector size={size} onChange={setSize}></SizeSelector>
          <QuantityPicker
            error={error}
            itemName={name}
            maxQuantity={stock}
            minQuantity={1}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <SubmitButton
            onSubmit={onSubmit}
            text="Add to cart"
            variant={ButtonVariant.Secondary}
          />
        </div>
      </div>
    </Page>
  );
};

export default ProductDetailsPage;
