import React from 'react';
// import PropTypes from 'prop-types';
import styles from './SmallFurniture.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class SmallFurniture extends React.Component {
  constructor() {
    super();

    this.state = {
      activeItem: 0,
    };
  }

  handleItemClick(index) {
    this.setState({
      activeItem: index,
    });
  }

  render() {
    return (
      <div>
        <h3 className={styles.title}>Featured Products</h3>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.image}>
              <img
                alt='furniture'
                src='https://cdn.pixabay.com/photo/2018/05/02/09/01/children-3368013__340.jpg'
              />
            </div>

            <div className={styles.details}>
              <div className={styles.subtitle}>Office Chair</div>
              <div className={styles.price}>$350.00</div>
              <div className={styles.stars}>
                <FontAwesomeIcon icon={faStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
              </div>
              <div className={styles.button}>
                <Button className={styles.button1}>ADD TO CART</Button>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.image}>
              <img
                alt='furniture'
                src='https://cdn.pixabay.com/photo/2017/08/06/11/08/white-2591357__340.jpg'
              />
            </div>

            <div className={styles.details}>
              <div className={styles.subtitle}>Office Chair</div>
              <div className={styles.price}>$320.00</div>
              <div className={styles.stars}>
                <FontAwesomeIcon icon={faStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
              </div>
              <div className={styles.button}>
                <Button className={styles.button1}>ADD TO CART</Button>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.image}>
              <img
                alt='furniture'
                src='https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_960_720.jpg'
              />
            </div>

            <div className={styles.details}>
              <div className={styles.subtitle}>Office Chair</div>
              <div className={styles.price}>$180.00</div>
              <div className={styles.stars}>
                <FontAwesomeIcon icon={faStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
              </div>
              <div className={styles.button}>
                <Button className={styles.button1}>ADD TO CART</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallFurniture;
