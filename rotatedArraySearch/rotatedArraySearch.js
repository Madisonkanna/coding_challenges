/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  var resultIndex;
  function getMinofArray(rotated) {
    return Math.min.apply(null, rotated);
  }
  var min = getMinofArray(rotated);
  var start = rotated.indexOf(min);

  var sortedArr = rotated.sort();
  var myIndex = start+sortedArr.indexOf(target);
  if(myIndex > rotated.length-1) {
    resultIndex = myIndex - rotated.length;
  } else return myIndex;
  return resultIndex;
};

// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 3)); // === 5
