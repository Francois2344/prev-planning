import { DARKGREEN, LIGHTGREEN, ORANGE, PINK, DATA_ACTION } from './type';

export const dataColorDark = () => {
  return {
    type: DARKGREEN,
  };
};
export const dataColorLight = () => {
  return {
    type: LIGHTGREEN,
  };
};
export const dataColorOrange = () => {
  return {
    type: ORANGE,
  };
};
export const dataColorPink = () => {
  return {
    type: PINK,
  };
};
export const dataAction = () => {
  return {
    type: DATA_ACTION,
  };
};
