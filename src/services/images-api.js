import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '20676418-087852e37819860cce9abe695';
const TYPE = 'photo';
const ORIENTATION = 'horizontal';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `${URL}?key=${KEY}&q=${searchQuery}&image_type=${TYPE}&orientation=${ORIENTATION}&page=${currentPage}&per_page=${pageSize}`,
    )
    .then(r => r.data.hits);
};

export default { fetchImages };
