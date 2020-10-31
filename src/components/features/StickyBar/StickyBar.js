import React from 'react';
import styles from './StickyBar.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

class StickyBar extends React.Component {
  render() {
    const { compareProduct, removeCompare } = this.props;

    return (
      <div className={compareProduct.length <= 0 ? styles.dontshow : styles.wrapper}>
        {compareProduct.map((product, index) => (
          <div key={index} className={styles.image}>
            <img src={product.bgImageUrl} alt={product.id}></img>
            <span className={styles.close} onClick={() => removeCompare(product)}>
              X
            </span>
            <Button className={styles.button}>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
        ))}
      </div>
    );
  }
}

StickyBar.propTypes = {
  compareProduct: PropTypes.array,
  bgImageUrl: PropTypes.string,
  removeCompare: PropTypes.func,
};

export default StickyBar;
