import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ColourFilter.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { colourFilter } from './ColourFilter.config';

class ColourFilter extends React.Component {
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
        <h3 className={styles.title}>Filter By Colour</h3>
        <div className={styles.wrapper}>
          {colourFilter.map((item, index) => (
            <div
              key={item.id}
              className={
                this.state.activeItem === index ? styles.active : styles.noactive
              }
              onClick={this.handleItemClick.bind(this, index)}
            >
              <div className={styles.item}>
                <FontAwesomeIcon
                  className={`${styles.icon}`}
                  icon={faSquare}
                  color={item.color}
                />
                {item.id}
                <div className={styles.item2}>{item.nr}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ColourFilter;
