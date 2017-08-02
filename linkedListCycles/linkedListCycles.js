/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 * 
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value) {
  return { value: value, next: null };
};

var hasCycle = function(linkedList) {
  // TODO: implement me!
<<<<<<< HEAD
  var arr = [];

  var myfun = function(node){
    //console.log("nodes: ", node.value)
    arr.push(node.value);
    //console.log("******** arr: ", arr);
    for(var i = 0; i < arr.length; i++){
      if(!node.next){
        //console.log("Heere")
        return false;
      } else if(node.next.value === arr[i]){
        return true;
      }
    }

    if(node.next === null){
      //console.log("Heere!!!")

      return false;
    } else myfun(node.next);

    //console.log("Unfinish!!!")

    return false;
  }

  return myfun(linkedList);
};

// var nodeA = Node('A');
// //console.log(nodeA.value);
// var nodeB = nodeA.next = Node('B');
// //console.log(nodeB.value);
// //console.log(nodeA.next);


// var nodeC = nodeB.next = Node('C');
// var nodeD = nodeC.next = Node('D');
// var nodeE = nodeD.next = Node('E');
// // console.log(hasCycle(nodeA)); // => false

// nodeE.next = nodeB;
// console.log(nodeE.next);
// console.log(hasCycle(nodeA)); // => true
=======
};
>>>>>>> a348dadd81a49509fe76b7d3dc5c53d6a2d3d531
