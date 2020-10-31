/* selectors */
export const compareId = ({ compareProducts }, id) => compareProducts.filter(item => item === id).length;
export const compareProduct = ({ compareProducts }) => compareProducts;

/* action name creator */
const reducerName = 'compares';
const createActionName = name => `app/${reducerName}/${name}`;

/* rating */
export const SET_COMPARE = createActionName('SET_COMPARE');
export const REMOVE_COMPARE = createActionName('REMOVE_COMPARE');

/* action creators */
export const setCompare = payload => ({ ...payload, type: SET_COMPARE});
export const removeCompare = payload => ({ ...payload, type: REMOVE_COMPARE});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_COMPARE: 
      return [...statePart, action.id];
  
    case REMOVE_COMPARE:
      return statePart.filter(( id ) => id !== action.id);
    default:
      return statePart;
  }
}