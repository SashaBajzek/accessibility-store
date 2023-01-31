import { ProductImage } from "../../inventory";
import "./ImageGallery.css";

interface ImageGallerytProps {
  images: ProductImage[];
}

const ImageGallery = ({ images }: ImageGallerytProps) => {
  return (
    <ul
      aria-label="Product Image Gallery"
      className="ImageGallery"
      role="region"
    >
      {images.map((image) => (
        <li className="listItem" key={image.fileName}>
          <img
            alt={image.description}
            className="image"
            src={`${process.env.PUBLIC_URL}/assets/${image.fileName}`}
        />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
