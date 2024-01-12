import { atom } from 'recoil';

export const widthState = atom({
  key: 'width',
  default: 0,
});

export const heightState = atom({
  key: 'height',
  default: 0,
});

export const inchState = atom({
  key: 'inch',
  default: 0,
});
