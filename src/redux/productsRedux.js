/* selectors */
export const getAll = ({ products }) => products;
export const getAllProd = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* rating */
export const CHANGE_RATING = createActionName('CHANGE_RATING');

/* action creators */
export const updateRating = (payload, stars) => ({
  payload,
  stars,
  type: CHANGE_RATING,
});
/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_RATING: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          return {
            ...product,
            rated: true,
            stars: action.stars,
          };
        } else {
          return product;
        }
      });
    }
    default:
      return statePart;
  }
}
