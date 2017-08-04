/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (str) {
  var result = [];
  var longestP1 = [];
  var longestP2 = [];

  var k;
  var j;

  for ( var i = 0; i < str.length; i++) {
    k = i-1;
    if(str[k] === str[i]){
      console.log("1");
      longestP1.push(str[i]);
      longestP1.unshift(str[k]);
      k--;
    } else {
        if(longestP1.length > 1){
          longestP1.push(str[i]);
          longestP1.unshift(str[k-2]);
        }
        k = null;
        if(longestP1.length > 1){
          result.push(longestP1);
        }        
        longestP1 = [];
      }


//racecar

    j = i-1;
    count = i;
    if(str[i] === str[j-1]){
      console.log("2");
      if(count === i) {
        longestP2.push(str[i-1]);
      }
      longestP2.push(str[i]);
      longestP2.unshift(str[j-1]);
      j--;
    } else {
        j = null;
        count = null;
        if(longestP2.length > 1){
          result.push(longestP2);
        }
        longestP2 = [];
      }
  }

  console.log(result);

  var maxResult = result[0];
  for(var m = 1; m < result.length; m++){
    if(result[m].length > maxResult.length){
      maxResult = result[m]
    }
  }


  return maxResult;

};

console.log(longestPalindrome(" racecar "));




