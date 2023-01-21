import { createContext } from "react";
import { Bracelet } from "../inventory";

interface FavoritesContextProps {
  favorites: Bracelet[];
  isFavorite: (item: Bracelet) => boolean;
  toggleFavorite: (item: Bracelet) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps>({
  favorites: [],
  isFavorite: () => false,
  toggleFavorite: () => {},
});
