import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Bracelet } from "../../inventory";
import { Heart } from "../../SVGs/Heart";
import { HeartHollow } from "../../SVGs/HeartHollow";
import IconButton from "../IconButton/IconButton";
import "./FavoriteButton.css";

interface FavoriteButtonProps {
  product: Bracelet;
}

const FavoriteButton = ({ product }: FavoriteButtonProps) => {
  const { isFavorite, favorites, toggleFavorite } =
    useContext(FavoritesContext);

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(product));
  }, [favorites, isFavorite, product]);

  return (
    <>
      {favorite ? (
        <IconButton
          ariaLabel={`Remove ${product.name} from favorites`}
          className="FavoriteButton"
          hasBoxShadow={true}
          icon={<Heart />}
          onClick={() => toggleFavorite(product)}
        />
      ) : (
        <IconButton
          ariaLabel={`Add ${product.name} to favorites`}
          className="FavoriteButton"
          hasBoxShadow={true}
          icon={<HeartHollow />}
          onClick={() => toggleFavorite(product)}
        />
      )}
    </>
  );
};

export default FavoriteButton;
