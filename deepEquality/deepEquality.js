/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

//MY SOLUTION!!!
// var deepEquals = function(apple, orange) {
//   var arr1 = [];
//   var arr2 = [];

//   var arr = [];
//   var toArray = function(obj){
//     for(var key in obj){
//       if((Object.prototype.toString.call(obj[key]) !== '[object Object]')){
//         if(arr[(arr.length)-1].length === 1){
//           arr[arr.length-1].push([key, obj[key]]);
//         }else arr.push([key, obj[key]]);
//       }
//       if((Object.prototype.toString.call(obj[key]) === '[object Object]')){
//         // arr.push([key, obj[key]])
//         arr.push([key]);
//         toArray(obj[key]);
//       //return toArray(obj[key]);
//       }
//     }
//     return arr;
//   }
  
// };



var deepEquals = function(apple, orange) {

  if (apple === orange) { return true; }
  if (apple && !orange || !apple && orange) { return false; }
  if (!(apple instanceof Object) || !(orange instanceof Object)) { return false; }
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  if (appleKeys.length !== orangeKeys.length) { return false; }
  if (appleKeys.length === 0) { return true; } // two empty objects are equal
  for (var i = 0; i < appleKeys.length; i++) {
    if (!deepEquals(apple[appleKeys[i]], orange[appleKeys[i]])) { return false; }
  }
  return true;
 };







