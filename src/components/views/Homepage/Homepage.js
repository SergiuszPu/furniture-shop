import React from 'react';
import Feedback from '../../features/Feedback/FeedbackContainer';

import styles from './Homepage.module.scss';
import PromotedBox from '../../features/PromotedBox/PromotedBox';
import Gallery from '../../features/Gallery/GalleryContainer';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../features/Brands/BrandsContainer';
import LatestBlog from '../../features/LatestBlog/LatestBlogContainer.js';

import SaleProduct from '../../features/SaleProducts/SaleProductContainer';

const Homepage = () => (
  <div className={styles.root}>
    <PromotedBox />
    <FeatureBoxes />
    <SaleProduct />
    <NewFurniture />
    <Gallery />
    <LatestBlog />
    <Brands />
    <Feedback />
  </div>
);

export default Homepage;
