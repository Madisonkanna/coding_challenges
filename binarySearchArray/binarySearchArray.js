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
  // console.log("arr", arr, "target", target);
  // console.log("start...");
  if(target === arr[arr.length/2]){
    // console.log("start... ===");

    return arr.length/2;
  } 
  // console.log("1");
  if(arr.length/2 === 0 && target !== arr[arr.length/2]){
    // console.log("start... nope! ");
    return "Not Found";
  }
    // console.log("2");

  if(target>arr[arr.length/2]){
    // console.log("(target>arr[arr.length/2])");
      binarySearch(arr.slice(arr[arr.length/2+1], arr[arr.length-1]));
    } else if(target<arr[arr.length/2]){
      // console.log("(target<arr[arr.length/2])");

      binarySearch(arr.slice(arr[0], arr[arr.length/2-1]));
    }
};

// var index = binarySearch([1, 2, 3, 4, 5], 4);
// console.log(index);