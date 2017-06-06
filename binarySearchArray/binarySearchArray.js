/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (arr, target) {

  if(target === arr[arr.length/2]){

    return arr.length/2;
  } 
  if(arr.length/2 === 0 && target !== arr[arr.length/2]){
    return "Not Found";
  }

  if(target>arr[arr.length/2]){
      binarySearch(arr.slice(arr[arr.length/2+1], arr[arr.length-1]));
    } else if(target<arr[arr.length/2]){

      binarySearch(arr.slice(arr[0], arr[arr.length/2-1]));
    }
};

