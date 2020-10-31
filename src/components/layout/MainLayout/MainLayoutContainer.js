import { connect } from 'react-redux';

import MainLayout from './MainLayout';

import {
  getViewportWidth,
  createAction_changeViewportWidth,
} from '../../../redux/viewportRedux';

const mapStateToProps = state => ({
  viewport: getViewportWidth(state),
});

const mapDispatchToProps = dispatch => ({
  changeViewportWidth: newView => dispatch(createAction_changeViewportWidth(newView)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
