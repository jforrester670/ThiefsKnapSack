/* This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

    square() must return a copy of the array, containing all values squared
    cube() must return a copy of the array, containing all values cubed
    average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
    sum() must return the sum of all array values
    even() must return an array of all even numbers
    odd() must return an array of all odd numbers

Note: the original array must not be changed in any case!
*/

Array.prototype.square = function() {
  var squared = this.map(function(num) {
    return num * num;
  })
  return squared;
}

Array.prototype.cube = function() {
  var cubed = this.map(function(num) {
    return num * num * num;
  })
  return cubed;
}

Array.prototype.sum = function() {
  var total = this.reduce(function(sum, num) {
    return sum += num;
  }, 0);
  return total;
}

Array.prototype.average = function() {
  if (this.length === 0) {
    return NaN;
  }
  var total = this.sum();
  return total / this.length;
}

Array.prototype.even = function() {
  var evenNums = this.filter(function(num) {
    return num % 2 === 0;
  });
  return evenNums;
}

Array.prototype.odd = function() {
  var oddNums = this.filter(function(num) {
    return num % 2 !== 0;
  })
  return oddNums;
}

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.sum());
console.log(numbers.average());
console.log(numbers.even());
console.log(numbers.odd());
