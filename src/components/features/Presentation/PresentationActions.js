import React from 'react';
import styles from './PresentationActions.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faEnvelope,
  faShoppingBasket,
  faHeart,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

class PresentationActions extends React.Component {
  render() {
    return (
      <form className={styles.actions}>
        <div className={styles.top}>
          <Button variant='small' className={styles.button}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
            <span> Add to cart</span>
          </Button>
          <ul>
            <li>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </Button>
            </li>
            <li>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
              </Button>
            </li>
            <li>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </Button>
            </li>
          </ul>
        </div>
        <div className={styles.quantity}>
          <label>Quanity:</label>
          <input type='number' defaultValue={2} />
          <Button className={styles.control} variant='outline'>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </Button>
          <Button className={styles.control} variant='outline'>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        </div>
      </form>
    );
  }
}

export default PresentationActions;
