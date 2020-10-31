import { connect } from 'react-redux';
import LatestBlog from './LatestBlog';

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(LatestBlog);
