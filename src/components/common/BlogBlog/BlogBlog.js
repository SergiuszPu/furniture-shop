import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogBlog.module.scss';
import Button from '../Button/Button';
import { faComments, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BlogBlog = ( {date, comments, textExample ,image, imageTitle  }) => {
  return (
    <div>
      <div className={styles.root}>
        <div className={styles.row}>
          <div className={styles.images}>
            <img src={image} alt={imageTitle} />
            <div className={styles.info}>
              <div className={styles.date}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faCalendarAlt}
                ></FontAwesomeIcon>{' '}
                {date}
              </div>
              <div className={styles.comments}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faComments}
                ></FontAwesomeIcon>{' '}
                {comments.length}
                {' comments '}
              </div>
            </div>
          </div>
          <div className={styles.textExampleTest}>
            <h3 className={styles.testExampleMain}>Products That Fight Static</h3>
            <p>{textExample}</p>
            <div>
              <Button className={styles.button1}>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogBlog.propTypes = {
  date: PropTypes.string,
  comments: PropTypes.string,
  textExample: PropTypes.string,
  image: PropTypes.string,
  imageTitle: PropTypes.string,
};

export default BlogBlog;
