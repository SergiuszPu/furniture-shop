import { connect } from 'react-redux';
import StickyBar from './StickyBar';
import {
  compareId,
  setCompare,
  removeCompare,
  compareProduct,
} from '../../../redux/compareRedux';

const mapStateToProps = (state, props) => ({
  isCompare: compareId(state, props.id),
  compareProduct: compareProduct(state),
});

const mapDispatchToProps = dispatch => ({
  setCompare: id => dispatch(setCompare({ id })),
  removeCompare: id => dispatch(removeCompare({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(StickyBar);
