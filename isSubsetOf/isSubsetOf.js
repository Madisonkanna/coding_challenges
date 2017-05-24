/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  // your code here
  let result;
  for (let i = 0; i < this.length; i++){
    result = false;
    for (let k = 0; k < arr.length; k++){
      if(this[i] === arr[k]){
        result = true;
        break;
      }
    }
    if(result === false){
      return false;
    }
  }
  return true;
};



//EXTRA CREDIT:

// Array.prototype.isSubsetOf = function (array) {
//   // your code here
//   for(let m = 0; m < this.length; m++){
//     for (let n = 0; n < array.length; n++){
//     ifHasCheck(this[m], array[n])
//     }
//   }
//   var ifHasCheck = function(thisArr, arr){
//     let result;
//     for (let i = 0; i < thisArr.length; i++){
//       result = false;
//       for (let k = 0; k < arr.length; k++){
//         if(thisArr[i] === arr[k]){
//           result = true;
//           break;
//         }
//       }
//       if(result === false){
//         return false;
//       }
//     }
//     return true;
//   }
// };

//  var a = ['commit','push', 'push']
//  console.log(a.isSubsetOf(['commit','rebase','blame', 'push'])); // true







