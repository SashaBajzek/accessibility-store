import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Bracelet } from "../../inventory";
import { Heart } from "../../SVGs/Heart";
import { HeartHollow } from "../../SVGs/HeartHollow";
import IconButton from "../IconButton/IconButton";
import "./ProductTile.css";

interface ProductTileProps {
  product: Bracelet;
}

const ProductTile = ({ product }: ProductTileProps) => {
  const { name, id, images, price } = product;
  const { isFavorite, favorites, toggleFavorite } =
    useContext(FavoritesContext);
  const [favorite, setFavorite] = useState(false);
  const productImage = images && images[0];

  useEffect(() => {
    setFavorite(isFavorite(product));
  }, [favorites, isFavorite, product]);

  return (
    <article className="productTile">
      <Link className="link" to={id}>
        {productImage ? (
          <img
            alt={productImage.description}
            className="image"
            src={`${process.env.PUBLIC_URL}/assets/${productImage.fileName}`}
          ></img>
        ) : (
          <div className="image">Product Image Loading</div>
        )}
        <h3 className="name">{name}</h3>
        <div className="price">${price}</div>
      </Link>
      {favorite ? (
        <IconButton
          ariaLabel={`Remove ${name} from favorites`}
          icon={<Heart />}
          onClick={() => toggleFavorite(product)}
        />
      ) : (
        <IconButton
          ariaLabel={`Add ${name} to favorites`}
          icon={<HeartHollow />}
          onClick={() => toggleFavorite(product)}
        />
      )}
    </article>
  );
};

export default ProductTile;
