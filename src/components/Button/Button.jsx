import PropTypes from 'prop-types';

const Button = ({ onClickButton }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  return (
    <button className='Button' type='button' onClick={onClickButton}>Load more</button>
  )
};

Button.propTypes = {
  onClickButton: PropTypes.func.isRequired,
}

export default Button;