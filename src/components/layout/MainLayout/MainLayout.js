import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Newsletter from '../Newsletter/Newsletter';
import ShopBanner from '../ShopBanner/ShopBanner';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

const checkViewportWidth = () => {
  if (window.innerWidth < 768) {
    return 'mobile';
  } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

const MainLayout = ({ children, changeViewportWidth }) => {
  useEffect(() => {
    changeViewportWidth(checkViewportWidth());
    window.addEventListener('resize', () => changeViewportWidth(checkViewportWidth()));
    return () =>
      window.removeEventListener('resize', changeViewportWidth(checkViewportWidth()));
  }, [changeViewportWidth]);

  return (
    <div>
      <Header />
      <ShopBanner />
      <BreadCrumbs />
      {children}
      <Newsletter />
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  changeViewportWidth: PropTypes.func,
};

export default MainLayout;
