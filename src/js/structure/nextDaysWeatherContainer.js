import create from '../utils/create.js';

const day3 = create({
  tagName: 'div',
  classNames: 'col-12 col-lg-4',
  child: [
    create({
      tagName: 'span',
      classNames: 'row d-flex justify-content-left weekday',
      attributes: [
        ['id', 'third-weekday'],
      ],
    }),
    create({
      tagName: 'div',
      classNames: 'row',
      child: [
        create({
          tagName: 'div',
          classNames: 'col-12 col-lg-6 d-flex justify-content-left weekday-temp',
          attributes: [
            ['id', 'third-weekday-temp'],
          ],
        }),
        create({
          tagName: 'div',
          classNames: 'col-12 col-lg-6',
          child: [
            create({
              tagName: 'img',
              attributes: [
                ['id', 'third-weekday-icon'],
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});

const day2 = create({
  tagName: 'div',
  classNames: 'col-12 col-lg-4',
  child: [
    create({
      tagName: 'span',
      classNames: 'row d-flex justify-content-left weekday',
      attributes: [
        ['id', 'second-weekday'],
      ],
    }),
    create({
      tagName: 'div',
      classNames: 'row',
      child: [
        create({
          tagName: 'div',
          classNames: 'col-12 col-lg-6 d-flex justify-content-elft weekday-temp',
          attributes: [
            ['id', 'second-weekday-temp'],
          ],
        }),
        create({
          tagName: 'div',
          classNames: 'col-12 col-lg-6',
          child: [
            create({
              tagName: 'img',
              attributes: [
                ['id', 'second-weekday-icon'],
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});

const day1 = create({
  tagName: 'div',
  classNames: 'col-12 col-lg-4',
  child: [
    create({
      tagName: 'span',
      classNames: 'row d-flex justify-content-left weekday',
      attributes: [
        ['id', 'first-weekday'],
      ],
    }),
    create({
      tagName: 'div',
      classNames: 'row',
      child: [
        create({
          tagName: 'div',
          classNames: 'col-12 col-lg-6 d-flex justify-content-left weekday-temp',
          attributes: [
            ['id', 'first-weekday-temp'],
          ],
        }),
        create({
          tagName: 'div',
          classNames: 'col-12 col-lg-6',
          child: [
            create({
              tagName: 'img',
              attributes: [
                ['id', 'first-weekday-icon'],
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});

const nextDaysWeatherContainer = create({
  tagName: 'div',
  classNames: 'row my-4 container-fluid',
  child: [
    day1,
    day2,
    day3,
  ],
});

export default nextDaysWeatherContainer;
