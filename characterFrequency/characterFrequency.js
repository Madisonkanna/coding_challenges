/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  var result = [];
  var resultElem = [];
  var count;
  var ifExist;
  for (var i = 0; i < string.length; i++){
    resultElem = [];
    count = 1
    ifExist = false;
    
    for(var m = 0; m < result.length; m++){
          if(string[i] === result[m][0]){
            ifExist = true;
            break;
          }
        }
    if(ifExist === false){
      resultElem.push(string[i]);
      resultElem.push(count);
  
      for(var k = i+1; k < string.length; k++){
        if(string[i] === string[k]){
  
            resultElem[1]++;
        }
      }
      result.push(resultElem);
    }
  }
  result.sort(function(a,b){return b[1] - a[1]});

  return result;
};










