

function capitalizeAndFilter(arr) {
    return arr.map(word => {
        return word.toUpperCase();
    })
        .filter(word => {
            return !word.startsWith('F');
        });
}

module.exports = {
    capitalizeAndFilter
}