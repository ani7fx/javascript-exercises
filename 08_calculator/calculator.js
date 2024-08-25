const add = function(num1, num2 ) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	return arr
  .reduce((total, elem) => {
    return total + elem;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, elem) => product * elem);
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	let total = 1;
  for (i = num; i > 1; i--){
    total *= i;
  }
  return total;
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
