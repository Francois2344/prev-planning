/* eslint-disable indent */
import { DARKGREEN, LIGHTGREEN, ORANGE, PINK } from './type';

const initialStateColor = {
  color: 'white',
};

const colorReducer = (state = initialStateColor, action) => {
  switch (action.type) {
    case DARKGREEN:
      return {
        ...state,
        color: 'darkgreen',
      };
    case LIGHTGREEN:
      return {
        ...state,
        color: 'lightgreen',
      };
    case ORANGE:
      return {
        ...state,
        color: 'orange',
      };
    case PINK:
      return {
        ...state,
        color: 'pink',
      };
    default:
      return state;
  }
};

export default colorReducer;
