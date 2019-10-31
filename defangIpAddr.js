
/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

 

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
*/


var defangIPaddr = function(address) {
   const ipArr = address.split('.');
   const resultIp = `${ipArr[0]}[.]${ipArr[1]}[.]${ipArr[2]}[.]${ipArr[3]}`;
   
   return resultIp;
};

console.log(defangIPaddr('1.1.1.1'));