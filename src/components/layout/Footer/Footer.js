import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ children }) => (
  <footer className={styles.root}>
    <div className={styles.footerMenu}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='d-flex justify-content-center col-lg-3 col-md-6 col-sm-12'>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#test'>About us</a>
                </li>
                <li>
                  <a href='#test'>Policy</a>
                </li>
                <li>
                  <a href='#test'>Conditions</a>
                </li>
                <li>
                  <a href='#test'>Online support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='d-flex justify-content-center col-lg-3 col-md-6 col-sm-12'>
            <div className={styles.menuWrapper}>
              <h6>My account</h6>
              <ul>
                <li>
                  <a href='#test'>Login</a>
                </li>
                <li>
                  <a href='#test'>My cart</a>
                </li>
                <li>
                  <a href='#test'>Wishlist</a>
                </li>
                <li>
                  <a href='#test'>Checkout</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='d-flex justify-content-center col-lg-3 col-md-6 col-sm-12'>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#test'>Specials</a>
                </li>
                <li>
                  <a href='#test'>New products</a>
                </li>
                <li>
                  <a href='#test'>Best Sellers</a>
                </li>
                <li>
                  <a href='#test'>Out Stores</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='d-flex justify-content-center col-lg-3 col-md-6 col-sm-12'>
            <div className={styles.menuWrapper}>
              <h6>Orders</h6>
              <ul>
                <li>
                  <a href='#test'>Payment options</a>
                </li>
                <li>
                  <a href='#test'>Shipping and delivery</a>
                </li>
                <li>
                  <a href='#test'>Returns</a>
                </li>
                <li>
                  <a href='#test'>Shipping</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 text-center'>
            <p></p>
          </div>
          <div
            className={
              'col-6 order-md-2 justify-content-start text-lg-center ' +
              styles.copyright
            }
          >
            <p>©Copyright 2016 Bazar | All Rights Reserved</p>
          </div>
          <div className={'col-6 order-md-3 text-right ' + styles.socialMedia}>
            <ul>
              <li>
                <a href='#test'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#test'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#test'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#test'>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#test'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#test'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
