import create from '../utils/create.js';
import { get } from '../storage.js';

const imageBtn = create({
  tagName: 'div',
  classNames: 'search-button px-3 py-1 d-flex align-items-center border-left border-right mr-1',
  child: [
    create({
      tagName: 'img',
      classNames: 'icon',
      attributes: [
        ['src', './src/icons/reload.svg'],
        ['id', 'refresh-icon'],
      ],
    }),
  ],
  attributes: [
    ['id', 'image-btn'],
  ],
});

const lang1 = create({
  tagName: 'li',
  classNames: 'dropdown-item',
  child: 'EN',
  attributes: [
    ['id', 'lang-EN'],
  ],
});

const lang2 = create({
  tagName: 'li',
  classNames: 'dropdown-item',
  child: 'RU',
  attributes: [
    ['id', 'lang-RU'],
  ],
});

const languageElements = create({
  tagName: 'div',
  classNames: 'dropdown-menu',
  child: [
    lang1,
    lang2,
  ],
});

const languageButton = create({
  tagName: 'button',
  classNames: 'btn btn-secondary dropdown-toggle border-right border-left',
  child: get('fancyWeatherLang'),
  attributes: [
    ['data-toggle', 'dropdown'],
    ['aria-haspopup', 'true'],
    ['aria-expanded', 'false'],
  ],
});

const languageList = create({
  tagName: 'div',
  classNames: 'dropdown d-inline',
  child: [
    languageButton,
    languageElements,
  ],
});

const fDegrees = create({
  tagName: 'div',
  classNames: 'search-button px-3 py-1 d-flex align-items-center ml-1 border-left',
  child: 'F',
  attributes: [
    ['id', 'f-btn'],
  ],
});

const cDegrees = create({
  tagName: 'div',
  classNames: 'search-button px-3 py-1 d-flex align-items-center border-right border-separator',
  child: 'C',
  attributes: [
    ['id', 'c-btn'],
  ],
});

const buttonGroup = create({
  tagName: 'div',
  classNames: 'd-flex col-sm-6 mt-1',
  child: [
    imageBtn,
    languageList,
    fDegrees,
    cDegrees,
  ],
});

const inputGroup = create({
  tagName: 'div',
  classNames: 'd-flex col-sm-6 justify-content-end px-0 mt-1',
  child: [
    create({
      tagName: 'input',
      classNames: 'search-input px-3 py-1',
      attributes: [
        ['id', 'search-input'],
        ['type', 'text'],
        ['placeholder', 'Search city or ZIP'],
      ],
    }),
    create({
      tagName: 'div',
      classNames: 'search-button px-3 py-1 d-inline',
      child: [
        create({
          tagName: 'img',
          classNames: 'icon',
          attributes: [
            ['src', './src/icons/microphone.svg'],
            ['id', 'icon'],
          ],
        }),
      ],
      attributes: [
        ['id', 'speech-button'],
      ],
    }),
    create({
      tagName: 'div',
      classNames: 'search-button border-right px-3 py-1 d-inline',
      child: 'SEARCH',
      attributes: [
        ['id', 'search-button'],
      ],
    }),
  ],
});

const topBar = create({
  tagName: 'div',
  classNames: 'row justify-content-between',
  child: [
    buttonGroup,
    inputGroup,
  ],
  attributes: [
    ['id', 'top-bar'],
  ],
});

export default topBar;
