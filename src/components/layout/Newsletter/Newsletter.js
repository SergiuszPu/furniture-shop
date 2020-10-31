import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styles from './Newsletter.module.scss';

const Newsletter = ({ children }) => (
  <footer className={styles.root}>
    <div className={styles.NewsletterMenu}>
      <div className='container'>
        <div className='row justify-content-center'>
          {/* <div className={styles.formField}> */}
          <h3 className={styles.NewsletterTitle}>NEWSLETTER:</h3>

          <form className={styles.NewsletterForm}>
            <div>
              <div className={styles.iconContainer}>
                <a href='#test'>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </a>
                <input type='email' placeholder='email here' />
              </div>
            </div>
          </form>
          <button className={styles.NewsletterSendButton}>
            <a href='#test'>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </a>
          </button>
        </div>
      </div>
    </div>
    {/* </div> */}
  </footer>
);

Newsletter.propTypes = {
  children: PropTypes.node,
};

export default Newsletter;
