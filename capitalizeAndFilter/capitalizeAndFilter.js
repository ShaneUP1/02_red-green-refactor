

function capitalizeAndFilter(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const newString = arr[i].toUpperCase();
        if (newString.charAt(0) === 'F') {
            continue;
        }
        newArr.push(newString);
    }
    return newArr;
}

module.exports = {
    capitalizeAndFilter
}