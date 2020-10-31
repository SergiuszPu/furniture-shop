import { connect } from 'react-redux';
import Gallery from './Gallery';
import { updateRating } from '../../../redux/productsRedux';
import { getAllTabs, getAll } from '../../../redux/GalleryRedux';
const mapStateToProps = state => ({
  products: getAll(state),
  galTabs: getAllTabs(state),
});

const mapDispatchToProps = dispatch => ({
  updateRating: (stars, payload) => dispatch(updateRating(payload, stars)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
