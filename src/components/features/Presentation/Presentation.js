import React from 'react';
import styles from './Presentation.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';
import StarsRating from '../../common/StarRating/StarRating';
import PresentationActions from './PresentationActions';
import PresentationGallery from './PresentationGallery';
import SocialMedia from '../../common/SocialMedia/SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Presentation extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <div className={'row no-gutters flex-nowrap flex-column flex-lg-row'}>
              <div className={'col-12 col-lg-5 p-3'}>
                <PresentationGallery
                  image={products[0].bgImageUrl}
                  name={products[0].name}
                />
              </div>
              <div className={'col-12 col-lg-7 p-3'}>
                <div className={styles.heading}>
                  <h3>{products[0].name}</h3>
                  <Button variant='outline' className={styles.control}>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faAngleLeft}
                    ></FontAwesomeIcon>
                  </Button>
                  <Button variant='outline' className={styles.control}>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.review}>
                  <div className={styles.stars}>
                    <StarsRating />
                  </div>
                  <p>(0 reviews)</p>
                  <Button>Add your review</Button>
                </div>
                <div className={styles.pricing}>
                  {products[0].oldPrice && (
                    <div className={styles.oldPrice}>$ {products[0].oldPrice}</div>
                  )}
                  <Button className={styles.price} noHover variant='small'>
                    $ {products[0].price}
                  </Button>
                </div>
                <PresentationActions />
                <div className={styles.overview}>
                  <h5>Quick Overview</h5>
                  <p>
                    Donec aliquet est sit amet nulla lobortis iaculis. Sed lacinia lacus
                    vel sapien scelerisque cursus. Fusce eu tincidunt nisi, eu porta
                    quam.
                  </p>
                </div>
                <div className={styles.stock}>
                  <p>
                    <span>Availability: </span>{' '}
                    {products[0].availability === true ? 'In Stock' : 'Out of Stock'}
                  </p>
                  <p>
                    <span>Category: </span>
                    {products[0].category}
                  </p>
                </div>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Presentation.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      oldPrice: PropTypes.number,
      stars: PropTypes.number,
      bgImageUrl: PropTypes.string,
      availability: PropTypes.bool,
    })
  ),
};

export default Presentation;
