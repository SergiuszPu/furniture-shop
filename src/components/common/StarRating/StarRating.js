import React from 'react';
import PropTypes from 'prop-types';

import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarsRating = ({ stars, id, updateRating, rated }) => {
  const ratingHandler = (event, id, i) => {
    event.preventDefault();
    updateRating(id, i);
  };

  return (
    <div className={rated ? styles.starsRated : styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#test' onClick={e => ratingHandler(e, id, i)}>
          {i <= stars ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

StarsRating.propTypes = {
  stars: PropTypes.number.isRequired,
  id: PropTypes.string,
  updateRating: PropTypes.func,
  rated: PropTypes.bool,
};

StarsRating.defaultProps = {
  stars: 2,
};

export default StarsRating;
