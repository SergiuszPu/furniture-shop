import React from 'react';
import styles from './FilterSize.module.scss';
// import Checkbox from '@material-ui/core/Checkbox';
import { filterSize } from './FilterSize.config';

class FilterSize extends React.Component {
  constructor() {
    super();

    this.state = {
      activeItems: [],
    };
  }

  handleItemClick(id, isActive) {
    const { activeItems } = this.state;

    const newActiveItems = isActive
      ? activeItems.filter(el => el !== id)
      : activeItems.concat(id);
    this.setState({ activeItems: newActiveItems });
  }

  render() {
    return (
      <div>
        <h3 className={styles.title}>Filter By Categories</h3>
        <div className={styles.wrapper}>
          {filterSize.map(({ id, nr }, index) => {
            const isActive = this.state.activeItems.includes(id);

            return (
              <div
                key={id}
                className={isActive ? styles.active : styles.noactive}
                onClick={this.handleItemClick.bind(this, id, isActive)}
              >
                <div className={styles.item}>
                  {/* <Checkbox checked={isActive} /> */}

                  {id}
                  <div className={styles.item2}>{nr}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FilterSize;
