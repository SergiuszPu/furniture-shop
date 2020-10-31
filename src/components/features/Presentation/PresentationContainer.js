import { connect } from 'react-redux';

import Presentation from './Presentation';

import { getAll } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(Presentation);
