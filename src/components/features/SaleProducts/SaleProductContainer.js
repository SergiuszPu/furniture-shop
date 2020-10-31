import SaleProduct from './SaleProduct';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/salesRedux';

const mapStateToProps = state => ({
  sales: getAll(state),
});

export default connect(mapStateToProps)(SaleProduct);
