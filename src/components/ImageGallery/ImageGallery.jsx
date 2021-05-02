import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onClickImage }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem key={id} previewImage={webformatURL} onClickImage={() => onClickImage(largeImageURL)}/>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  onClickImage: PropTypes.func.isRequired,
}

export default ImageGallery;