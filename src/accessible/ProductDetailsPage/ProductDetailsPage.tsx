import { useParams } from "react-router-dom";
import { getItemById } from "../../inventory";

const ProductDetailsPage = () => {
  const params = useParams();
  const item = params.id && getItemById(params.id);
  return <>{item ? <h1>{item.name}</h1> : <h1>Not found</h1>}</>;
};

export default ProductDetailsPage;
