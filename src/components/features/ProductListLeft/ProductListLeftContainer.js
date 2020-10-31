import { connect } from 'react-redux';
import ProductListLeft from './ProductListLeft';
import { getAllCat } from '../../../redux/categoriesRedux';
import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  pCategories: getAllCat(state),
  products: getAll(state),
});

export default connect(mapStateToProps)(ProductListLeft);
