/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
  // TODO: Your code here
<<<<<<< HEAD
  var callback1;
  var obj1 = obj;

  obj.on = function(ageChange, callback){
    obj.age++;
    if(callback){
      callback1 = callback;
      callback();
    }
  }

  obj.trigger = function(ageChange) {
    return callback1();
  }

  return obj1;
};




// var obj = mixEvents({ name: 'Alice', age: 30 });
// console.log("new obj: ", obj);

// // var callback1;
// // obj.on = function(ageChange, callback){
// //   obj.age++;
// //   console.log(obj.age);
// //   callback1 = callback;
// //   callback();
// // }


// // obj.trigger = function(ageChange) {
// //   return callback1();
// // }


// obj.on('ageChange', function(){ // On takes an event name and a callback function
//   console.log('Age changed');
// });

// obj.on('ageChange');

// obj.trigger();

// console.log("new obj: ", obj);


// //console.log("******", mixEvents());






=======
  return obj;
};
>>>>>>> 16cbc200274f1c8c106cdffb4865477db6b4514c
