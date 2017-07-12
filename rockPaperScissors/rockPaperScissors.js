/*
* Write a function that generates every sequence of combinationss a single
* player could combinations over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/




var rockPaperScissors = function() {

  let result = [];
  let combinations = ["rock", "paper", "scissors"];
  for (let i = 0; i < combinations.length; i++){
    for (let k = 0; k < combinations.length; k++){
      for (let j = 0; j < combinations.length; j++){
        result.push([combinations[i], combinations[k], combinations[j]]);
      }
    }
  }

  return result;
}

// var rockPaperScissors = function(n) {
//   let result = [];
//   let combinations = ["rock", "paper", "scissors"];
//   var helper = function() {
//     if(){

//     }
//     else helper(combinations[])
//   }
//   helper()
// }

