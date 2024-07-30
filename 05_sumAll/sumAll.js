const sumAll = function(firstNumber, secondNumber) {
    if (typeof(firstNumber) != "number" || typeof(secondNumber) != "number") {
        return "ERROR";
    }
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return "ERROR";
    }
    if (firstNumber<0 || secondNumber<0) {
        return "ERROR";
    }
    
    let end = (firstNumber < secondNumber ? secondNumber: firstNumber);
    let start = (firstNumber > secondNumber ? secondNumber: firstNumber);
    let number = (start < end ? start : end);
    let numberToAdd = number;
    while (numberToAdd != end) {
        numberToAdd += 1;
        number += numberToAdd;
    }
    return number;
};

// Do not edit below this line
module.exports = sumAll;
