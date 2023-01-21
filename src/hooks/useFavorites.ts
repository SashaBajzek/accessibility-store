import { useCallback, useState } from "react";
import { Bracelet } from "../inventory";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Bracelet[]>([]);

  const indexOfBracelet = useCallback(
    (bracelet: Bracelet) => {
      if (favorites.length === 0) return -1;
      for (let i = 0; i < favorites.length; i++) {
        if (bracelet === favorites[i]) {
          return i;
        }
      }
      return -1;
    },
    [favorites]
  );

  const isFavorite = useCallback(
    (bracelet: Bracelet) => {
      return indexOfBracelet(bracelet) >= 0 ? true : false;
    },
    [indexOfBracelet]
  );

  const removeFavorite = useCallback(
    (item: Bracelet) => {
      const newFavorites = [...favorites];
      const index = indexOfBracelet(item);
      if (index < 0) return;
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
    },
    [favorites, indexOfBracelet]
  );

  const addFavorite = useCallback(
    (item: Bracelet) => {
      const newFavorites = [...favorites];
      newFavorites.push(item);
      setFavorites(newFavorites);
    },
    [favorites]
  );

  const toggleFavorite = useCallback(
    (item: Bracelet) => {
      isFavorite(item) ? removeFavorite(item) : addFavorite(item);
    },
    [addFavorite, isFavorite, removeFavorite]
  );

  return {
    isFavorite,
    favorites,
    toggleFavorite,
  };
}
