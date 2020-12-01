const { capitalizeAndFilter } = require('./capitalizeAndFilter');

describe('capitalizeAndFilter', () => {
    it('takes an array of strings, capitalizes all strings, and filters out any strings that start with letter f', () => {

        const arrOfStrings = ['spot', 'rover', 'bingo', 'fred'];

        const actual = capitalizeAndFilter(arrOfStrings);

        expect(actual).toEqual(['SPOT', 'ROVER', 'BINGO']);
    });
});