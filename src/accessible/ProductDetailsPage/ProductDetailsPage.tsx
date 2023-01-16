import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../App";
import { getItemById } from "../../inventory";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import SubmitButton, { ButtonVariant } from "../SubmitButton/SubmitButton";
import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  const params = useParams();
  const item = params.id && getItemById(params.id);
  if (item === undefined || item === "") return null;

  const { description, images, name, price } = item;
  const productImage = images && images[0];

  return (
    <div className="productDetailsPage">
      {productImage ? (
        <img
          alt={productImage.description}
          className="image"
          src={`${process.env.PUBLIC_URL}/assets/${productImage.fileName}`}
        ></img>
      ) : (
        <div className="image">Product Image Loading</div>
      )}
      <div className="info">
        <h1>{name}</h1>
        <div className="price">${price}</div>
        <QuantityPicker
          minQuantity={1}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <SubmitButton
          onSubmit={() => addItem({ item, quantity })}
          text="Add to cart"
          variant={ButtonVariant.Secondary}
        />

        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
