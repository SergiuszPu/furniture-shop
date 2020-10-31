import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import styles from './SwipeAbleWrapper.module.scss';

const SwipeAbleWrapper = ({ leftAction, rightAction, children }) => {
  const params = {
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

  };

  return (
    <div className={styles}>
      <Swiper {...params}>{children}</Swiper>
    </div>
  );
};

SwipeAbleWrapper.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default SwipeAbleWrapper;
