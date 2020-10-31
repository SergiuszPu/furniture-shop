import React from 'react';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import styles from './MenuBar.module.scss';
import NavBar from '../../common/NavBar/NavBar';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row justify-content-around flex-xl-row flex-md-column align-items-center'>
        <div className='col-auto mt-3 '>
          <ProductSearch />
        </div>
        <NavBar />
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
