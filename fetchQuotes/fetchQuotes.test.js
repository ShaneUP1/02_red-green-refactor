const { fetchQuotes } = require('./fetchQuotes');

describe('fetchQuotes', () => {
    it('returns a single quote from an API with a particular format', async () => {
        const quote = {
            name: 'Bender',
            text: "I'm a fraud. A poor, lazy, sexy fraud.",
            image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        };

        const actual = await fetchQuotes();
        expect(actual).toEqual(quote);
    }
    );
});