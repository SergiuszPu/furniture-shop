/* selectors */
export const getViewportWidth = ({ viewportWidth }) => viewportWidth;

/* action name creator */
const reducerName = 'viewport';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const CHANGE_VIEWPORT = createActionName('CHANGE_VIEWPORT');

/* action creators */
export const createAction_changeViewportWidth = payload => ({
  payload,
  type: CHANGE_VIEWPORT,
});

/* reducer */
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_VIEWPORT: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
