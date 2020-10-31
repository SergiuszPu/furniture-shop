import React from 'react';
//import PropTypes from 'prop-types';
import styles from './SocialMedia.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const SocialMedia = () => {
  return (
    <div className={'row ' + styles.socials}>
      <Button variant='outline' className={styles.fb}>
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        Share
      </Button>
      <Button variant='outline' className={styles.gplus}>
        <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
        Google +
      </Button>
      <Button variant='outline' className={styles.twitter}>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
        Tweet
      </Button>
      <Button variant='outline' className={styles.pinterest}>
        <FontAwesomeIcon icon={['fab', 'pinterest-p']} />
        Pinterest
      </Button>
      <Button variant='outline' className={styles.linkedin}>
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        Linkedin
      </Button>
    </div>
  );
};

export default SocialMedia;
