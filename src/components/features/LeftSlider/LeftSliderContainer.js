import { connect } from 'react-redux';
import { getAll, getCount, getNew } from '../../../redux/productsRedux';
import LeftSlider from './LeftSlider';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(LeftSlider);
