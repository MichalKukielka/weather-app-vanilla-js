import create from '../utils/create.js';
import weatherDataCoulmn from './weatherDataCoulmn.js';
import weatherMapCoulmn from './weatherMapCoulmn.js';

const weatherBody = create({
  tagName: 'div',
  classNames: 'row px-3 py-3 my-3',
  child: [
    weatherDataCoulmn,
    weatherMapCoulmn,
  ],
  attributes: [
    ['id', 'weatherBody'],
  ],
});

export default weatherBody;
