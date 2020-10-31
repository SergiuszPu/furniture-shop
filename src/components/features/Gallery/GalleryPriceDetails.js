import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryPriceDetails.module.scss';

import StarRating from '../../common/StarRating/StarRating';

const GalleryPriceDetails = ({
  name,
  stars,
  price,
  oldPrice,
  id,
  rated,
  updateRating,
}) => {
  return (
    <div className={styles.details}>
      <div className={styles.price}>
        <h5>${price}.00</h5>
        <h6>{oldPrice && `$${oldPrice}.00'`}</h6>
      </div>
      <div className={styles.description}>
        <h5>{name}</h5>
        <StarRating stars={stars} rated={rated} id={id} updateRating={updateRating} />
      </div>
    </div>
  );
};

GalleryPriceDetails.propTypes = {
  stars: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  id: PropTypes.string,
  updateRating: PropTypes.func,
  rated: PropTypes.bool,
};

export default GalleryPriceDetails;
