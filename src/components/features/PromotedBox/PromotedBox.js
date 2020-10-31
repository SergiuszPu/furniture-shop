import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromotedBox.module.scss';
import RightSlider from '../RightSlider/RightSlider';
import LeftSidePromotedBox from '../LeftSidePromotedBox/LeftSidePromotedBoxContainer';

const PromotedBox = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'flex-column flex-md-row col-md-12 ' + styles.content}>
        <div className={'col-lg-4 ' + styles.item}>
          <LeftSidePromotedBox />
        </div>
        <div className={'col-lg-8 ' + styles.item2}>
          <RightSlider />
        </div>
      </div>
    </div>
  </div>
);

PromotedBox.propTypes = {
  children: PropTypes.node,
};

export default PromotedBox;
