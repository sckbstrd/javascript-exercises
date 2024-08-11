const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, next) => acc + next, 0);
};

const multiply = function(arr) {
	return arr.reduce((acc, next) => acc * next);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    result = n * factorial(n-1);
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


