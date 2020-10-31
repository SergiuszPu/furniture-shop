import React from 'react';
// import PropTypes from 'prop-types';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col text-left'>
          <h1>
            HOME &gt; <span>Furniture</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
);

// CompanyClaim.propTypes = {};

export default BreadCrumbs;
