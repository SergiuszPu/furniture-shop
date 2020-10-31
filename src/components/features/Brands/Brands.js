import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Brands extends React.Component {
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
    const { brands } = this.props;
    const pages = brands.length;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <div
              className={styles.control}
              onClick={e => this.handlePageChange(e, 'back', pages)}
            >
              <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
            </div>
            <div className={styles.logoBox}>
              {brands
                .slice(activePage * 6, activePage * 6 + 6)
                .map((brand, element) => (
                  <div key={element} className={styles.logo}>
                    <img src={brand.logo} alt={brand.name} />
                  </div>
                ))}
            </div>
            <div
              className={styles.control}
              onClick={e => this.handlePageChange(e, 'next', pages)}
            >
              <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      logo: PropTypes.string,
    })
  ),
  viewport: PropTypes.string,
};

export default Brands;
