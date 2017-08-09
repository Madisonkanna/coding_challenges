// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.

// 4*3 = 4+4+4
var multiply = function(x, y) {
  // TODO: should return the product of x * y
  var result = 0; 
  for (var i = 0; i < y; i++) {
    result = result + x;

    //console.log("result: ", result);
    //console.log("x: ", x);
  }
  console.log("here: ", result);
  return result;
};

//10/2= ~ 10-2-2-2-2-2 ~ =5
//2/3 => 0.667  2*1000
var divide = function(x, y) {
  // TODO: should return the quotient of x / y
  var result = 0;

  x = multiply(x, 1000);


  while(x>0){
    if(x>y) {
      x=x-y;
      result++;
    } else break;
  }
  result = multiply(0.001, result);
  return result;
};

var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
  return x - multiply(divide(x, y), y);
};

console.log(multiply(4, 3));
console.log(divide(2, 3));
//console.log(modulo(13,5)); //fix

