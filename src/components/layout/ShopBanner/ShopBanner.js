import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ShopBanner.module.scss';

const ShopBanner = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col text-center'>
          <h1>
            <span>BEDROOM</span> FURNITURE
          </h1>
          <p>
            ALLWAYS <span>25%</span> OFF OR MORE
          </p>
        </div>
      </div>
    </div>
  </div>
);

// CompanyClaim.propTypes = {};

export default ShopBanner;
