import React from 'react';
import styles from './More.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';
import StarsRating from '../../common/StarRating/StarRating';

class More extends React.Component {
  state = {
    activeTab: 'reviews',
  };

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <ul className={'row ' + styles.tabs}>
              {tabs.map(item => (
                <li
                  key={item.id}
                  className={'col-sm-12 col-md-3 col-lg-2 ' + styles.tab}
                >
                  <Button
                    className={(item.id === activeTab && styles.active).toString()}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
            <div className={styles.content}>
              <div className={'col-12 ' + styles.opinion}>
                <p>There are no reviews for this product.</p>
                <p>Add a review</p>
              </div>
              <div className={'col-12'}>
                <p>Your Rating</p>
                <div className={'row ' + styles.stars}>
                  <span>Bad</span>
                  <StarsRating />
                  <span>Good</span>
                </div>
              </div>
              <form className={styles.form}>
                <div className={'row '}>
                  <div className={'col-12'}>
                    <label>Your review</label>
                    <textarea />
                  </div>
                </div>
                <div className={'row'}>
                  <div className={'col-sm-12 col-md-6 col-lg-5 pb-3'}>
                    <label className={styles.visuallyHidden}>Name:</label>
                    <input type='text' placeholder='Name*' />
                  </div>
                  <div className={'col-sm-12 col-md-6 col-lg-5 pb-3'}>
                    <label className={styles.visuallyHidden}>Email:</label>
                    <input type='email' placeholder='Email*' />
                  </div>
                  <div className={'col-lg-2 '}>
                    <input type='submit' value='Continue' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

More.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default More;
