const fibonacci = function(nth) { // nth number
    
    if (nth < 0) {
        return "OOPS";
    }

    if (nth == 0) {
        return 0;
    } else if (nth == 1 || nth == 2) {
        return 1;
    } else {
        result = 0;
        for (let i=1; i<=2;) {
            result += fibonacci(nth-i) 
            i++;
        }
        
        return result;
    }
};

// Do not edit below this line
module.exports = fibonacci;
