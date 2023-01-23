import { ProductImage } from "../../inventory";
import "./ImageGallery.css";

interface ImageGallerytProps {
  images: ProductImage[];
}

const ImageGallery = ({ images }: ImageGallerytProps) => {
  return (
    <div className="ImageGallery">
      {images.map((image) => (
        <img
          alt={image.description}
          className="image"
          src={`${process.env.PUBLIC_URL}/assets/${image.fileName}`}
        ></img>
      ))}
    </div>
  );
};

export default ImageGallery;
