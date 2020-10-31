export const getAll = ({ ratings }) => ratings; // <--- atm without  action name creator/action types/action creators

/* reducer */ export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
