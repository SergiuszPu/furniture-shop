import React from 'react';
import styles from './RightSlider.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { imageData } from '../../../redux/initialState';

class RightSlider extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(e, action, length) {
    let newPage = this.state.activePage;
    e.preventDefault();

    if (action === 'next' && newPage < length - 1) {
      this.setState({ activePage: newPage + 1 });
    }

    if (action === 'back' && newPage > 0) {
      this.setState({ activePage: newPage - 1 });
    }
  }

  nextPage(pages) {
    let page = this.state.activePage;
    if (page < pages - 1) this.setState({ activePage: page + 1 });
  }

  prevPage() {
    let page = this.state.activePage;
    if (page > 0) this.setState({ activePage: page - 1 });
  }

  render() {
    const { activePage } = this.state;
    const image = imageData;
    const pages = image.length;

    return (
      <div>
        {image.slice(activePage * 1, (activePage + 1) * 1).map(item => (
          <div key={item}>
            <div className={styles.component}>
              <img className={'right-img'} src={item.image} alt={item.title} />
              <div className={styles.text}>
                <h1>
                  INDOOR <b>FURNITURE</b>
                </h1>
                <h5>SAVE UP TO 50% OF ALL FURNITURE</h5>
              </div>
              <Button className={'btn btn-light ' + styles.shopnowbtn}>
                {' '}
                SHOP NOW
              </Button>
            </div>
            <div className={styles.button}>
              <Button
                className='col-6'
                onClick={e => this.handlePageChange(e, 'next', pages)}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </Button>
              <Button
                className='col-6'
                onClick={e => this.handlePageChange(e, 'back', pages)}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default RightSlider;
