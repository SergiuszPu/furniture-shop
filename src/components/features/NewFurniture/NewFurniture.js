import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import SwipeAbleWrapper from '../../common/SwipeAbleWrapper/SwipeAbleWrapper';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

//import {Spring} from 'react-spring/renderprops';

import StickyBar from '../StickyBar/StickyBarContainer';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  productsOnPage(viewport) {
    let productsOnPage;

    if (viewport === 'desktop') {
      productsOnPage = 8;
    } else if (viewport === 'tablet') {
      productsOnPage = 2;
    } else {
      productsOnPage = 1;
    }

    return productsOnPage;
  }

  render() {
    const { categories, products, viewport } = this.props;
    const { activeCategory, activePage } = this.state;

    const viewPathname = window.location.pathname
      .split('/')
      .slice(0, -1)
      .join('/');

    const categoryProducts = products.filter(item => item.category === activeCategory);

    const productCount = this.productsOnPage(viewport);
    const pagesCount = Math.ceil(
      categoryProducts.length / (viewPathname === '/product' ? 4 : productCount)
    );

    const newPages = [];

    for (let i = 0; i < pagesCount; i++) {
      newPages.push(
        <div
          key={'ProductList' + i + '-' + activePage}
          className={'row ' + styles.changeForNewPage}
        >
          {categoryProducts
            .slice(
              i * (viewPathname === '/product' ? 4 : productCount),
              (i + 1) * (viewPathname === '/product' ? 4 : productCount)
            )
            .map(item => (
              <div key={item.id} className='col-lg-3 col-md-6 col-sm-12'>
                <ProductBox {...item} />
                {/* <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <ProductBox {...item} />
                    </div>
                  )}
                </Spring> */}
              </div>
            ))}
        </div>
      );
    }

    const changeNewPages = () => {
      return newPages;
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div
                className={
                  'col-auto ' +
                  (viewPathname === '/product' ? styles.headingProduct : styles.heading)
                }
              >
                <h3>New furniture</h3>

              </div>
              <div className={'col-sm-12 ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        href='#test'
                        className={(
                          item.id === activeCategory && styles.active
                        ).toString()}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className={styles.dots}><ul>{dots}</ul></div> */}
            </div>
          </div>
          <SwipeAbleWrapper>{changeNewPages()}</SwipeAbleWrapper>
          <StickyBar/>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  viewport: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
