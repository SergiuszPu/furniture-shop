import React from 'react';
import styles from './GalleryIcon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const GalleryIcons = () => (
  <div className={styles.icons}>
    <ul>
      <li>
        <Button variant='outline' className={styles.icon}>
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </Button>
        <div className={styles.tooltip}>Like</div>
      </li>
      <li>
        <Button variant='outline' className={styles.icon}>
          <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
        </Button>
        <div className={styles.tooltip}>Compare</div>
      </li>
      <li>
        <Button variant='outline' className={styles.icon}>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Button>
        <div className={styles.tooltip}>Details</div>
      </li>
      <li>
        <Button variant='outline' className={styles.icon}>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
        </Button>
        <div className={styles.tooltip}>Buy now</div>
      </li>
    </ul>
  </div>
);

export default GalleryIcons;
