import create from '../src/js/utils/create.js';

describe('create method', () => {

    test('should create div element by default', () => {
        const config = {};
        const expected = '<div></div>';
        const result = create(config);
        expect(result).toMatchSnapshot(expected);
    });

    test('should create specified type of element', () => {
        const config = {
            tagName: 'span',
        };
        const expected = '<span></span>';
        const result = create(config);
        expect(result).toMatchSnapshot(expected);
    });

    test('should create element with specified css class', () => {
        const config = {
            classNames: 'class1',
        };
        const expected = '<div class="class1"></div>';
        const result = create(config);
        expect(result).toMatchSnapshot(expected);
    });

    test('should create element with more than one css class', () => {
        const config = {
            classNames: 'class1 class2',
        };
        const expected = '<div class="class1 class2"></div>';
        const result = create(config);
        expect(result).toMatchSnapshot(expected);
    });

    test('should create element with custom attributes', () => {
        const config = {
            attributes: ['id', 'id1'],
        };
        const expected = '<div id="id1"></div>';
        const result = create(config);
        expect(result).toMatchSnapshot(expected);
    });

    test('should create element with child', () => {
        const config = {
            child: 'test'
        };
        const expected = '<div>test</div>';
        const result = create(config);
        expect(result).toMatchSnapshot(expected);
    });

    test('should create children', () => {
        const config = {
            child: [
                create({ child: '1' }),
                create({ child: '2' }),
            ],
        };
        const expected = '<div><div>1</div><div>2</div></div>';
        const result = create(config);
        expect(result).toMatchSnapshot(expected);
    });

});

