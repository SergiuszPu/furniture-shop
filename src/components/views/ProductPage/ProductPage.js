import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import More from '../../features/More/MoreContainer';
import NewFurniture from './../../features/NewFurniture/NewFurnitureContainer';
import Presentation from '../../features/Presentation/PresentationContainer';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      <Presentation />
      <More />
      <NewFurniture />
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;
