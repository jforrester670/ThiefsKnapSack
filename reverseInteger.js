/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21
*/


var reverse = function(x) {
  const limit = 2147483647;
  let strNum = String(x);
  let numArr = strNum.split('');
  let result = x;
  if (strNum.length === 1) {
    return result;
  }
  
  if (numArr[0] === '-') {
    numArr.shift();
    numArr.reverse();
    strNum = numArr.toString();
    strNum = strNum.replace(/,/g, '');
    if (Number(strNum) < limit) {
      result = Number(strNum) * -1;
    } else {
      result = 0;
    }
  } else {
    numArr.reverse();
    strNum = numArr.toString();
    strNum = strNum.replace(/,/g, '');
    result = Number(strNum);
  }

  return result > limit ? 0 : result;
};

console.log(reverse(-2147483648));