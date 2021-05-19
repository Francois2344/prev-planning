/* eslint-disable indent */
import { FILL_COLOR } from './type';

const initialStateColor = {
  darkgreen: '#4FA100',
  lightgreen: '#88FF17',
  pink: '#FF43D7',
  orange: '#FFA419',
  white: '#FFFFFF',
};

const colorReducer = (state = initialStateColor, action) => {
  switch (action.type) {
    case FILL_COLOR:
      return {
        ...state,
        darkgreen:
          state.darkgreen || state.lightgreen || state.orange || state.pink,
      };
    default:
      return state.white;
  }
};

export default colorReducer;
