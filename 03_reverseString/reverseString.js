const reverseString = function(string) {
    const stringLetters = string.split("");
    const reversedLetters = stringLetters.reverse();
    return reversedLetters.join("");
};

// Do not edit below this line
module.exports = reverseString;
