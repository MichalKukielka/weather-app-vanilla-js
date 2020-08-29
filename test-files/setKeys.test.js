import setKeys from '../src/js/utils/setKeys.js';

describe('setKeys method', () => {

    test('should return object related to Celcius degrees`', () => {
        const config = 'C';
        const expected = {
            todayKey: 'temp_c',
            feelsLike: 'feelslike_c',
            nextDayKey: 'avgtemp_c',
        };
        const result = setKeys(config);
        expect(result).toEqual(expected);
    });

    test('should return object related to Fahrenheit degrees`', () => {
        const config = 'F';
        const expected = {
            todayKey: 'temp_f',
            feelsLike: 'feelslike_f',
            nextDayKey: 'avgtemp_f',
        };
        const result = setKeys(config);
        expect(result).toEqual(expected);
    });

    test('should return object related to Celcius degrees as default`', () => {
        const config = '';
        const expected = {
            todayKey: 'temp_c',
            feelsLike: 'feelslike_c',
            nextDayKey: 'avgtemp_c',
        };
        const result = setKeys(config);
        expect(result).toEqual(expected);
    });

});
