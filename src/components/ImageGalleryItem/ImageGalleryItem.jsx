import PropTypes from 'prop-types';

const ImageGalleryItem = ({ previewImage, onClickImage }) => (
  <li
    className="ImageGalleryItem"
    onClick={onClickImage}>
    
    <img
      className="ImageGalleryItem-image"
      src={previewImage}
      alt="" />
  </li>
)

ImageGalleryItem.propTypes = {
  previewImage: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
}

export default ImageGalleryItem;