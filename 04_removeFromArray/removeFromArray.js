const removeFromArray = function(array, ...values) {
    for (let value of values) {
        let index;
        while ((index = array.indexOf(value)) !== -1) {
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
