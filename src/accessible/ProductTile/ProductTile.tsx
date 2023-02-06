import { Link } from "react-router-dom";
import { Bracelet } from "../../inventory";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./ProductTile.css";

interface ProductTileProps {
  product: Bracelet;
}

const ProductTile = ({ product }: ProductTileProps) => {
  const { name, id, images, price } = product;
  const productImage = images && images[0];

  return (
    <div className="productTile">
      <Link className="link" to={id}>
        {productImage ? (
          <img
            alt=""
            aria-hidden={true}
            className="image"
            src={`${process.env.PUBLIC_URL}/assets/${productImage.fileName}`}
          />
        ) : (
          <div className="image">Product Image Loading</div>
        )}
        <h3 className="name" id={`name-${id}`}>
          {name}
        </h3>
        <div className="price">${price}</div>
      </Link>
      <FavoriteButton product={product} />
    </div>
  );
};

export default ProductTile;
