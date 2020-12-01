

describe('getName', () => {
    it('returns the name property of an object', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };

        const actual = getName(spot);
        expect(actual).toEqual('spot');

    });

});