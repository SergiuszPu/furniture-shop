import React from 'react';
import PropTypes from 'prop-types';

import styles from './GalleryRightSide.module.scss';
import Button from '../../common/Button/Button';

const GalleryRightSide = ({ bgImageUrl, price, category, name }) => (
  <div className={styles.rightColumn}>
    <img src={bgImageUrl} alt={name} className={styles.rightImage} />
    <article>
      <h2>
        <span className={styles.from}>From</span>{' '}
        <span className={styles.price}>${price}.00</span>{' '}
      </h2>
      <h2 className={styles.furniture}>{category}</h2>
      <Button variant='main' className={styles.button}>
        Shop now
      </Button>
    </article>
  </div>
);

GalleryRightSide.propTypes = {
  bgImageUrl: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.string,
};

export default GalleryRightSide;
