import { useContext } from "react";
import "./FavoritesPage.css";
import { FavoritesContext } from "../../../context/FavoritesContext";
import ProductList from "../../ProductList/ProductList";
import Page from "../Page/Page";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Page className="FavoritesPage" heading="Favorites" title="Favorites">
      <ProductList items={favorites} />
      {favorites.length <= 0 && <div className="message">No favorites yet</div>}
    </Page>
  );
};

export default FavoritesPage;
