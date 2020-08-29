/** Creates HTMLElement with specified attributes
 * @param {string} unit Temperature unit
 *
 * @returns {object} object with weather data keys
 */

export default function setKeys(unit) {
    if (unit === 'C') {
        const tempKeys = {
            todayKey: 'temp_c',
            feelsLike: 'feelslike_c',
            nextDayKey: 'avgtemp_c',
        };
        return tempKeys;
    }
    if (unit === 'F') {
        const tempKeys = {
            todayKey: 'temp_f',
            feelsLike: 'feelslike_f',
            nextDayKey: 'avgtemp_f',
        };
        return tempKeys;
    }
    return {
        todayKey: 'temp_c',
        feelsLike: 'feelslike_c',
        nextDayKey: 'avgtemp_c',
    };
}
