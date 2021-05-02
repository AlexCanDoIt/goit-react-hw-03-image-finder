/* Modules */
import { Component } from 'react';
// import shortid from 'shortid';

/* Components */
import imagesApi from './services/images-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';

/* Styles */

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    error: null,
    imageForModal: '',
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      images: [],
      searchQuery: query,
      currentPage: 1,
      error: null,
    });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = image => {
    this.setState(({ showModal }) => ({
      imageForModal: !showModal ? image : '',
      showModal: !showModal,
    }));
  };

  render() {
    const { images, error, imageForModal, showModal, isLoading } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <>
        <div className="App">
          <Searchbar onSubmit={this.onChangeQuery} />
          {error && <h1 className="Error">Oops, something went wrong...</h1>}
          <ImageGallery images={images} onClickImage={this.toggleModal} />
          {isLoading && <Loader />}
          {shouldRenderLoadMoreButton && (
            <Button showModal={showModal} onClickButton={this.fetchImages} />
          )}
        </div>
        {imageForModal && (
          <Modal image={imageForModal} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

export default App;
