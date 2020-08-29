import create from '../utils/create.js';
import weatherBody from './weatherBody.js';
import topBar from './topBar.js';

const main = create({
  tagName: 'div',
  classNames: 'main px-5 py-5',
  child: [
    topBar,
    weatherBody,
  ],
});

export default main;
