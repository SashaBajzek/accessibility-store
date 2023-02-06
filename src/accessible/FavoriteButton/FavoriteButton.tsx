import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Bracelet } from "../../inventory";
import { Heart } from "../../SVGs/Heart";
import { HeartHollow } from "../../SVGs/HeartHollow";
import IconButton from "../IconButton/IconButton";
import "./FavoriteButton.css";

interface FavoriteButtonProps {
  hasMessage?: boolean;
  product: Bracelet;
}

const FavoriteButton = ({
  hasMessage = false,
  product,
}: FavoriteButtonProps) => {
  const { isFavorite, favorites, toggleFavorite } =
    useContext(FavoritesContext);

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(product));
  }, [favorites, isFavorite, product]);

  return (
    <div className="FavoriteButton">
      {favorite ? (
        <IconButton
          ariaLabel={`Remove ${product.name} from favorites`}
          hasBoxShadow={true}
          icon={<Heart />}
          onClick={() => toggleFavorite(product)}
        />
      ) : (
        <IconButton
          ariaLabel={`Add ${product.name} to favorites`}
          hasBoxShadow={true}
          icon={<HeartHollow />}
          onClick={() => toggleFavorite(product)}
        />
      )}
      {hasMessage && (
        <div className="message">{favorite ? "Saved to Favorites" : ""}</div>
      )}
    </div>
  );
};

export default FavoriteButton;
