import React from 'react';
import styles from './ProductListLeft.module.scss';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';

import ProductBox from '../../common/ProductBox/ProductBoxContainer';

const ProductList = ({ pCategories, products }) => {
  const { categoryId } = useParams();
  const category = pCategories.find(cate => cate.id === categoryId);

  if (!category) {
    return <Redirect to='/notfound' />;
  } else {
    const { id } = category;
    const activeCategory = id;

    const categoryProducts = products.filter(item => item.category === activeCategory);

    return (
      <div className={styles.root}>
        <div className={'container' + styles.content}>
          <div className={styles.panelBar}>
            <div className={'row no-gutters align-items-end ' + styles.panelBarElement}>
              <div className={'col-auto ' + styles.heading}>
                <h3>{category.name}</h3>
                <div className={'row'}>
                  {categoryProducts.slice(0, 8).map(item => (
                    <div key={item.id} className='col-6 col-12-sm'>
                      <ProductBox {...item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

ProductList.propTypes = {
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
    })
  ),
};

export default ProductList;
