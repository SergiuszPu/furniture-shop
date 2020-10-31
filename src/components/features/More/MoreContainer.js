import { connect } from 'react-redux';

import More from './More';

import { getAllTabs } from '../../../redux/tabsRedux.js';

const mapStateToProps = state => ({
  tabs: getAllTabs(state),
});

export default connect(mapStateToProps)(More);
