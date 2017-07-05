/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {

  // TODO: Implement me!
  var result = [];
  var n = matrix[0].length-1;
  var j = matrix.length-1;
  for(var m = 0; m < matrix.length; m++){
    if(n>=0){
      var i = m;
      for(var k = m; k < n+1; k++){
        result.push(matrix[i][k]);
        //result.pop();
      }
      k=n;
      for(i = m+1; i < j+1; i++){      //fixed till length of the matrix
        result.push(matrix[i][k]);
      }
      i = j;
      for(k=n-1;k>=m;k--){
        result.push(matrix[i][k]);     //fix k=n-1 i=j
      }

      k=m;
      for(i=j-1;i>=m+1;i--){
        result.push(matrix[i][k]);    //fix i=j-1
        //result.pop();

      }
      n--;
      j--;
    }
  }
  // if(matrix.length%2===1){
  //   result.pop();
  // }
  return result;
};


    console.log(spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]));

console.log(spiralTraversal([
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ]));

console.log(spiralTraversal([
          [1,2,3,4,5],
          [6,7,8,9,10],
          [11,12,13,14,15],
          [16,17,18,19,20],
          [21,22,23,24,25]
        ]));


console.log("*******last test: ", spiralTraversal([
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16],
      [17,18,19,20],
      [21,22,23,24]
    ]));

console.log("******* one more test: ", spiralTraversal([
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
  ]));

console.log("******* two more test: ", spiralTraversal([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16],
    [17,18,19,20]
  ]));

console.log("******* three more test: ", spiralTraversal([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], [22, 23, 24]]));
