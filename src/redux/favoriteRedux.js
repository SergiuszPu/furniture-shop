/* selectors */
export const favoriteId = ({ favorites }, id) => favorites.filter(item => item === id).length;

/* action name creator */
const reducerName = 'setfavorite';
const createActionName = name => `app/${reducerName}/${name}`;

/* rating */
export const SET_FAVORITE = createActionName('SET_FAVORITE');
export const REMOVE_FAVORITE = createActionName('REMOVE_FAVORITE');

/* action creators */
export const setFavorite = payload => ({ ...payload, type: SET_FAVORITE});
export const removeFavorite = payload => ({ ...payload, type: REMOVE_FAVORITE});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_FAVORITE: 
      return [...statePart, action.id];
  
    case REMOVE_FAVORITE:
      return statePart.filter(( id ) => id !== action.id);
    default:
      return statePart;
  }
}