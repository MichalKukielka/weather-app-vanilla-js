import create from '../utils/create.js';

const weatherMapCoulmn = create({
  tagName: 'div',
  classNames: 'col-12 col-lg-4',
  child: [
    create({
      tagName: 'div',
      classNames: 'row',
      child: [
        create({
          tagName: 'div',
          classNames: 'map d-block w-100',
          attributes: [
            ['id', 'map'],
          ],
        }),
      ],
    }),
    create({
      tagName: 'div',
      classNames: 'row d-flex justify-content-end coord pt-3',
      attributes: [
        ['id', 'latitude'],
      ],
    }),
    create({
      tagName: 'div',
      classNames: 'row d-flex justify-content-end coord',
      attributes: [
        ['id', 'longitude'],
      ],
    }),
  ],
  attributes: [
    ['id', 'mapDataContainer'],
  ],
});

export default weatherMapCoulmn;
