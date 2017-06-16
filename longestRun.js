// Write a function that, given a string, Finds the longest run of identical
// * characters and returns an array containing the start and end indices of
// * that run. If there are two runs of equal length, return the first one.
// * For example:
// *
// *   longestRun(“abbbcc”) // [1, 3]
// *   longestRun(“aabbc”)  // [0, 1]
// *   longestRun(“abcd”)   // [0, 0]
// *
// * Try your function with long, random strings to make sure it handles large
// * inputs well


var longestRun = function(str) {
  var arr = [];
  var maxArr = [];
  for (var i = 0; i < str.length; i++){
    console.log("here 1");
    if(arr.length === 1 && str[i+1] && str[i] !== str[i+1]){
      console.log("here 2");

      arr.push(i+1);
      if(maxArr.length === 0) {
        maxArr.push(arr[0]);
        maxArr.push(arr[1]);
        arr = [];
      }
      if(maxArr.length > 0 && arr[1] > maxArr[1]) {
        maxArr = [];
        maxArr.push(arr[0]);
        maxArr.push(arr[1]);
        arr = [];
      }
    }

    if(str[i] === str[i+1]) {
      if(arr.length === 0) {
        arr.push(i);
      }
    }
  }
  maxArr[1] = maxArr[1] - 1;
  return maxArr;
}

