/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(arr) {
  var result;
  var currentsum = 0;
  var max = arr.reduce(function(a, b) {
      return Math.max(a, b);
  }); 
  result = max;
  for ( var i = 0; i < arr.length; i++){
    currentsum = currentsum+arr[i];
    if(currentsum > max){
      result = currentsum;
    }
  }
  return result;
};
