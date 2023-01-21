import { useContext, useEffect } from "react";
import "./FavoritesPage.css";
import { FavoritesContext } from "../../context/FavoritesContext";
import { SetTitleContext } from "../../context/SetTitleContext";
import ProductList from "../ProductList/ProductList";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const { setTitle } = useContext(SetTitleContext);

  useEffect(() => {
    setTitle("Favorites");
  }, [setTitle]);

  return (
    <div className="FavoritesPage">
      <h1>Favorites</h1>
      <ProductList items={favorites} />
    </div>
  );
};

export default FavoritesPage;
