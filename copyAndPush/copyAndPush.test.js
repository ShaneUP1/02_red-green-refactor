const { copyAndPush } = require('./copyAndPush');

describe('copyAndPush', () => {
    it('returns a new array of the original array with one item pushed in', () => {
        const numberArray = [1, 2, 3];

        const actual = copyAndPush(numberArray, 4);
        expect(actual).toEqual([1, 2, 3, 4]);
    });
});