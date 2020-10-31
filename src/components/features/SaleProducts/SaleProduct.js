import React from 'react';
import PropTypes from 'prop-types';
import styles from './SaleProduct.module.scss';

class SaleProduct extends React.Component {
  render() {
    const { sales } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div
            className={styles.leftBanner}
            style={{ backgroundImage: sales[0].image }}
          >
            <h2>{sales[0].title} </h2>
            <h1>{sales[0].subtitle}</h1>
            <p>{sales[0].discount}</p>
          </div>
          <div
            className={styles.rightTopBanner}
            style={{ backgroundImage: sales[1].image }}
          >
            <h2>{sales[1].title}</h2>
            <h1>{sales[1].subtitle}</h1>
            <p>{sales[1].discount}</p>
          </div>
          <div
            className={styles.rightBottomBanner}
            style={{ backgroundImage: sales[2].image }}
          >
            <h2>{sales[2].title}</h2>
            <h1>{sales[2].subtitle}</h1>
          </div>
        </div>
      </div>
    );
  }
}
SaleProduct.propTypes = {
  sales: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      discount: PropTypes.string,
    })
  ),
};

export default SaleProduct;
