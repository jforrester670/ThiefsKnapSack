/* Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
  let subStrObj = {};
  let tempArr = [];
  let longest = 0;
  
  if (s.length < 2) {
    return s.length;
  }
  
  for (let i = 0; i < s.length; i++) {
    tempArr = [s[i]];
    for (let k = i + 1; k < s.length; k++) {
      if (k === s.length - 1) {
        if (tempArr.includes(s[k])) {
          subStrObj[i] = tempArr;
        } else {
          tempArr.push(s[k]);
          subStrObj[i] = tempArr;
          if (tempArr.length === s.length) {
            return s.length;
          }
        }
      } else {
        if (tempArr.includes(s[k])) {
          subStrObj[i] = tempArr;
          k = s.length;
        } else {
          tempArr.push(s[k]);
        }
      }
    }
  }

  for (let key in subStrObj) {
    if (subStrObj[key].length > longest) {
      longest = subStrObj[key].length;
    }
  }

  console.log(subStrObj);
  return longest;
};

console.log(lengthOfLongestSubstring("dvdf"));