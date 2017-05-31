/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */




var largestProductOfThree = function(arr) {
  arr.sort();
  var result = false;
  var count = 1;
  var myProduct = arr[arr.length-1];
  while (result === false && count < 10){
    result = true;
    myProduct= myProduct*count;
    for(var i = 0; i < arr.length; i++){
      if(myProduct%arr[i] !== 0){
        result = false;
        break;
      }
    }
    
    if(result !== false){
      result = true;
    }
    count++;
  }

  return myProduct;
};
