const palindromes = function (text) {
    textArray = text.toLowerCase()
                    .replace(/[^\w\s\']|_/g, "")
                    .replace(/\s+/g, "")
                    .split('');
    if (textArray.join('') === textArray.reverse().join('')) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
