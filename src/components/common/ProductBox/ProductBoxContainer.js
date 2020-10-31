import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getAll, updateRating } from '../../../redux/productsRedux';
import { favoriteId, setFavorite, removeFavorite } from '../../../redux/favoriteRedux';
import {
  setCompare,
  removeCompare,
  compareId,
  compareProduct,
} from '../../../redux/compareRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state),
  isFavorite: favoriteId(state, props.id),
  isCompare: compareId(state, props.id),
  compareProduct: compareProduct(state),
});

const mapDispatchToProps = dispatch => ({
  updateRating: (payload, stars) => dispatch(updateRating(payload, stars)),
  setFavorite: id => dispatch(setFavorite({ id })),
  removeFavorite: id => dispatch(removeFavorite({ id })),
  setCompare: id => dispatch(setCompare({ id })),
  removeCompare: id => dispatch(removeCompare({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
