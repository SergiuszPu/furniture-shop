import Feedback from './Feedback';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/ratingsRedux';

const mapStateToProps = state => ({
  ratings: getAll(state),
});

export default connect(mapStateToProps)(Feedback);
