/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
<<<<<<< HEAD
  var result = [];
  // add an item to the top of the stack
  this.push = function(item) {
    result.push(item);
=======

  // add an item to the top of the stack
  this.push = function() {
>>>>>>> d78806cfb021618e93bc673260b0c3e4f9faaf74
  };

  // remove an item from the top of the stack
  this.pop = function() {
<<<<<<< HEAD
    result.pop(item);
=======
>>>>>>> d78806cfb021618e93bc673260b0c3e4f9faaf74
  };

  // return the number of items in the stack
  this.size = function() {
<<<<<<< HEAD
    return result.length();
=======
>>>>>>> d78806cfb021618e93bc673260b0c3e4f9faaf74
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
<<<<<<< HEAD
  this.enqueue = function(item) {
    // TODO: implement `enqueue`
    inbox.push(item);
=======
  this.enqueue = function() {
    // TODO: implement `enqueue`
>>>>>>> d78806cfb021618e93bc673260b0c3e4f9faaf74
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    // TODO: implement `dequeue`
<<<<<<< HEAD
    if (outbox.isEmpty()) {
        while (!inbox.isEmpty()) {
           outbox.push(inbox.pop());
        }
    }
    return outbox.pop();
=======
>>>>>>> d78806cfb021618e93bc673260b0c3e4f9faaf74
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
<<<<<<< HEAD
    return inbox.size()+outbox.size();
  };
};


=======
  };
};
>>>>>>> d78806cfb021618e93bc673260b0c3e4f9faaf74
