import { useContext, useEffect, useState } from "react";
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
import { SetTitleContext } from "../../../context/SetTitleContext";
import ImageGallery from "../../ImageGallery/ImageGallery";

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [size, setSize] = useState(Size.Medium);
  const { addItem, cart } = useContext(CartContext);
  const { setTitle } = useContext(SetTitleContext);

  const params = useParams();
  const item = params.id && getItemById(params.id);

  useEffect(() => {
    setTitle(item ? item.name : "Shop");
  }, [item, setTitle]);

  if (item === undefined || item === "") return null;

  const { description, images, name, price, stock } = item;

  const onSubmit = () => {
    const cartItem = { item, quantity, size };
    const quantityOfItemInCart = getQuantityOfItemInCart(cartItem, cart);
    const availableQuantity = getAvailableQuantity(cartItem, cart);

    if (quantity <= availableQuantity) {
      setError("");
      addItem(cartItem);
    } else if (quantityOfItemInCart > 0) {
      setError(
        `Invalid quantity.  There are only ${item.stock} available and there are ${quantityOfItemInCart} already in cart`
      );
    } else {
      setError(`Invalid quantity.  There are only ${item.stock} available`);
    }
  };

  return (
    <div className="productDetailsPage">
      <ImageGallery images={images} />
      <div className="info">
        <h1>{name}</h1>
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

        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
