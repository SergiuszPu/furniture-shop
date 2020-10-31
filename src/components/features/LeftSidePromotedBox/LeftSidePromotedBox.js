import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeftSidePromotedBox.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import StarRating from '../../common/StarRating/StarRating';
import LeftSlider from '../LeftSlider/LeftSlider';

class LeftSidePromotedBox extends React.Component {
  render() {
    const { products, id } = this.props;

    return (
      <div className={styles.root}>
        <LeftSlider />
        <div className={styles.content}>
          <Link to={`/product/${id}`}>
            <h5>{products[0].name}</h5>
          </Link>
          <StarRating />
        </div>
        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button variant='outline' className={styles.active}>
              <FontAwesomeIcon icon={faEye}>Add to compare</FontAwesomeIcon>
            </Button>
            <Button variant='outline' className={styles.active}>
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button variant='outline' className={styles.active}>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.oldPrice}>$ {products[0].oldPrice}</div>
          <div className={styles.price}>
            <Button noHover variant='small'>
              $ {products[0].price}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

LeftSidePromotedBox.propTypes = {
  id: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      oldPrice: PropTypes.number,
    })
  ),
};

export default LeftSidePromotedBox;
